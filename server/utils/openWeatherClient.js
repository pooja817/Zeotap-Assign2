const axios = require("axios");
require("dotenv").config();

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (city) => {
  try {
    const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching current data for ${city}:`, error.message);
    throw error;
  }
};

const getWeatherForecast = async (city) => {
  try {
    const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching forecast for ${city}:`, error.message);
    throw error;
  }
};

module.exports = { getWeatherData, getWeatherForecast };
