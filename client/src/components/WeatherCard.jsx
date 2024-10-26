// import React, { useState } from 'react';
// import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog, WiStrongWind, WiHumidity } from 'react-icons/wi';
// import WeatherModal from './WeatherModel';

// const WeatherCard = ({
//   city,
//   avgTemp,
//   tempMin,
//   tempMax,
//   dominantCondition,
//   humidity,
//   windSpeed,
//   forecast,
// }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const iconMap = {
//     Clear: <WiDaySunny size={64} className="text-yellow-500" />,
//     Clouds: <WiCloudy size={64} className="text-gray-500" />,
//     Rain: <WiRain size={64} className="text-blue-500" />,
//     Snow: <WiSnow size={64} className="text-white" />,
//     Fog: <WiFog size={64} className="text-gray-300" />,
//   };

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <div className="bg-white shadow-md rounded-lg p-6 m-4 w-80 transition-transform transform hover:scale-105">
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-semibold text-primary">{city}</h2>
//           {iconMap[dominantCondition] || <WiDaySunny />}
//         </div>
//         <div className="mt-4">
//           <p className="text-2xl font-bold text-secondary">{avgTemp}°C</p>
//           <p className="text-gray-500">Min: {tempMin}°C | Max: {tempMax}°C</p>
//           <p className="text-gray-500">Condition: {dominantCondition}</p>
//           <p className="text-gray-500 flex items-center space-x-2">
//             <WiHumidity size={24} /> <span>Humidity: {humidity}%</span>
//           </p>
//           <p className="text-gray-500 flex items-center space-x-2">
//             <WiStrongWind size={24} /> <span>Wind Speed: {windSpeed} m/s</span>
//           </p>
//         </div>
//         <button
//           onClick={openModal}
//           className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition"
//         >
//           Show 5-Day Forecast
//         </button>
//       </div>

//       <WeatherModal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         forecast={forecast}
//         city={city}
//       />
//     </>
//   );
// };

// export default WeatherCard;


import React, { useState } from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog } from "react-icons/wi";
import WeatherModal from "./WeatherModel";

const iconMap = {
  Clear: <WiDaySunny size={64} className="text-yellow-500" />,
  Clouds: <WiCloudy size={64} className="text-gray-500" />,
  Rain: <WiRain size={64} className="text-blue-500" />,
  Snow: <WiSnow size={64} className="text-white" />,
  Fog: <WiFog size={64} className="text-gray-300" />,
};

const WeatherCard = ({
  city,
  avgTemp,
  tempMin,
  tempMax,
  dominantCondition,
  humidity,
  windSpeed,
  forecast,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 m-4 w-80 transition-transform transform hover:scale-105">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-primary">{city}</h2>
          {iconMap[dominantCondition] || (
            <WiDaySunny size={64} className="text-yellow-500" />
          )}
        </div>
        <div className="mt-4">
          <p className="text-2xl font-bold text-secondary">{avgTemp}°C</p>
          <p className="text-gray-500">
            Min: {tempMin}°C | Max: {tempMax}°C
          </p>
          <p className="text-gray-500">Condition: {dominantCondition}</p>
          <p className="text-gray-500">Humidity: {humidity}%</p>
          <p className="text-gray-500">Wind Speed: {windSpeed} m/s</p>
        </div>
        <button
          onClick={openModal}
          className="mt-4 px-4 py-2 bg-secondary text-white rounded-md hover:bg-primary transition"
        >
          Show 5-Day Forecast
        </button>
      </div>

      <WeatherModal
        isOpen={isModalOpen}
        onClose={closeModal}
        forecast={forecast}
        city={city}
      />
    </>
  );
};

export default WeatherCard;
