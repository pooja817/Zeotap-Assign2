import React, { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import WeatherAlert from "../components/WeatherAlert";
import WeatherChart from "../components/WeatherChart";
import Loader from "../components/Loader";
import { fetchWeatherSummaries } from "../services/weatherService";

const HomePage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        const data = await fetchWeatherSummaries();
        console.log("Weather Data:", data); // Ensure data is logged correctly
        setWeatherData(data);

        const alertMessages = data
          .filter((item) => item.avgTemp > 35)
          .map((item) => ({
            city: item.city,
            message: `High temperature alert: ${item.avgTemp}°C`,
          }));
        setAlerts(alertMessages);
      } catch (error) {
        console.error("Failed to load weather data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadWeatherData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">
        Weather Dashboard
      </h1>

      {alerts.length > 0 && (
        <div className="mb-6">
          {alerts.map((alert, index) => (
            <WeatherAlert
              key={index}
              city={alert.city}
              message={alert.message}
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center">
        {weatherData.map((item) => (
          <WeatherCard key={item.city} {...item} />
        ))}
      </div>

      {weatherData.length > 0 && (
        <div className="mt-8">
          <WeatherChart data={weatherData} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
