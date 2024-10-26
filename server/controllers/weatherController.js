const {
  getWeatherData,
  getWeatherForecast,
} = require("../utils/openWeatherClient");
const WeatherSummary = require("../models/DailyWeatherSummary");
const axios = require("axios");
const toCelsius = (temp) => Math.round(temp - 273.15); // Round to whole number

// Controller function to update weather for multiple cities
const updateWeather = async (req, res) => {
  const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];
  const weatherSummaries = [];

  for (const city of cities) {
    try {
      const currentData = await getWeatherData(city);
      const forecastData = await getWeatherForecast(city);

      // Extract current weather data and ensure temperature consistency
      let currentTemp = toCelsius(currentData.main.temp);
      let tempMin = toCelsius(currentData.main.temp_min);
      let tempMax = toCelsius(currentData.main.temp_max);

      // Adjust tempMin and tempMax based on currentTemp for consistency
      if (currentTemp > tempMax) tempMax = currentTemp;
      if (currentTemp < tempMin) tempMin = currentTemp;

      const avgTemp = Math.round((currentTemp + tempMax + tempMin) / 3);
      const dominantCondition = currentData.weather[0].main;
      const humidity = currentData.main.humidity;
      const windSpeed = currentData.wind.speed;

      // Format forecast to get unique daily entries
      const formattedForecast = forecastData.list
        .filter((item, index, self) =>
          index === self.findIndex((f) => f.dt_txt.split(' ')[0] === item.dt_txt.split(' ')[0])
        )
        .slice(0, 5)
        .map((f) => ({
          date: f.dt_txt.split(' ')[0],
          temp: toCelsius(f.main.temp),
          condition: f.weather[0].main,
          humidity: f.main.humidity,
          windSpeed: f.wind.speed,
        }));

      // Push the summary for the current city
      weatherSummaries.push({
        city,
        currentTemp,
        avgTemp,
        tempMin,
        tempMax,
        dominantCondition,
        humidity,
        windSpeed,
        forecast: formattedForecast,
      });
    } catch (error) {
      console.error(`Error fetching weather data for ${city}:`, error.message);
    }
  }

  // Send the weather summaries as a response
  console.log('Weather Summaries Sent:', weatherSummaries); // For debugging
  res.status(200).json({ message: 'Weather updated successfully', weatherSummaries });
};

module.exports = { updateWeather };