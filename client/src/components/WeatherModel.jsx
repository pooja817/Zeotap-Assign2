import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiFog,
  WiStrongWind,
  WiHumidity,
} from "react-icons/wi";

const iconMap = {
  Clear: <WiDaySunny size={32} className="text-yellow-500" />,
  Clouds: <WiCloudy size={32} className="text-gray-500" />,
  Rain: <WiRain size={32} className="text-blue-500" />,
  Snow: <WiSnow size={32} className="text-white" />,
  Fog: <WiFog size={32} className="text-gray-300" />,
};

const WeatherModal = ({ isOpen, onClose, forecast, city }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primary">
            5-Day Forecast - {city}
          </h2>
          <button className="text-red-500 font-bold text-lg" onClick={onClose}>
            ×
          </button>
        </div>
        <ul className="space-y-2">
          {forecast.map((day, index) => (
            <li
              key={index}
              className="flex flex-col bg-gray-100 p-2 rounded-md"
            >
              <div className="flex justify-between items-center">
                <span>{day.date}</span>
                <span className="flex items-center space-x-2">
                  <span>{day.temp}°C</span>
                  {iconMap[day.condition] || <WiDaySunny />}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="flex items-center space-x-2">
                  <WiHumidity size={20} /> <span>{day.humidity}%</span>
                </span>
                <span className="flex items-center space-x-2">
                  <WiStrongWind size={20} /> <span>{day.windSpeed} m/s</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherModal;
