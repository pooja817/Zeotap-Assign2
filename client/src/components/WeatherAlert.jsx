import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const WeatherAlert = ({ city, message }) => (
  <div className="bg-red-600 text-white p-4 rounded-md shadow-md flex items-center mb-4">
    <FaExclamationTriangle size={24} className="mr-2" />
    <p>
      {city}: {message}
    </p>
  </div>
);

export default WeatherAlert;
