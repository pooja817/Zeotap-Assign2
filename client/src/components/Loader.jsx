import React from "react";
import { WiDaySunny } from "react-icons/wi";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <WiDaySunny size={80} className="animate-spin text-yellow-400 mb-4" />
      <p className="text-xl font-semibold text-gray-600">
        Fetching the latest weather data...
      </p>
    </div>
  );
};

export default Loader;
