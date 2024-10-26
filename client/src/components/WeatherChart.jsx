// import React, { useRef, useEffect, useState } from "react";
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";
// import Loader from "./Loader";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// const createGradient = (ctx, area, color1, color2) => {
//   if (!area) return color1;
//   const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
//   gradient.addColorStop(0, color1);
//   gradient.addColorStop(1, color2);
//   return gradient;
// };

// const WeatherChart = ({ data = [] }) => {
//   // Ensure `data` defaults to an empty array
//   const tempChartRef = useRef(null);
//   const mergedChartRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(false);
//     return () => {
//       if (tempChartRef.current) tempChartRef.current.destroy();
//       if (mergedChartRef.current) mergedChartRef.current.destroy();
//     };
//   }, []);

//   if (isLoading) return <Loader />;

//   if (data.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <p className="text-xl font-semibold text-gray-500">
//           No weather data available. Please try again later.
//         </p>
//       </div>
//     );
//   }

//   const tempData = {
//     labels: data.map((item) => item.city || "Unknown City"),
//     datasets: [
//       {
//         label: "Average Temperature (°C)",
//         data: data.map((item) => item.avgTemp || 0),
//         fill: true,
//         backgroundColor: (context) =>
//           createGradient(
//             context.chart.ctx,
//             context.chart.chartArea,
//             "#fb923c",
//             "#f97316"
//           ),
//         borderColor: "#fb923c",
//         tension: 0.4,
//       },
//       {
//         label: "Max Temperature (°C)",
//         data: data.map((item) => item.tempMax || 0),
//         borderColor: "#f43f5e",
//         fill: false,
//         tension: 0.4,
//       },
//       {
//         label: "Min Temperature (°C)",
//         data: data.map((item) => item.tempMin || 0),
//         borderColor: "#38bdf8",
//         fill: false,
//         tension: 0.4,
//       },
//     ],
//   };

//   const mergedData = {
//     labels: data.map((item) => item.city || "Unknown City"),
//     datasets: [
//       {
//         label: "Humidity (%)",
//         data: data.map((item) => item.humidity || 0),
//         backgroundColor: "rgba(54, 162, 235, 0.7)",
//         borderColor: "rgba(54, 162, 235, 1)",
//         yAxisID: "y1",
//         borderRadius: 8,
//         barThickness: 20,
//       },
//       {
//         label: "Wind Speed (m/s)",
//         data: data.map((item) => item.windSpeed || 0),
//         backgroundColor: "rgba(255, 159, 64, 0.8)",
//         borderColor: "rgba(255, 159, 64, 1)",
//         yAxisID: "y2",
//         borderRadius: 8,
//         barThickness: 20,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           font: { size: 14, family: "Poppins, sans-serif" },
//           padding: 20,
//         },
//       },
//       title: {
//         display: true,
//         text: "Weather Trends by City",
//         font: { size: 22, weight: "bold", family: "Poppins, sans-serif" },
//         color: "#F3F4F6",
//       },
//     },
//     scales: {
//       y1: {
//         type: "linear",
//         position: "left",
//         beginAtZero: true,
//         ticks: { stepSize: 5, color: "#A1A1AA" },
//         grid: { color: "#374151" },
//       },
//       y2: {
//         type: "linear",
//         position: "right",
//         beginAtZero: true,
//         ticks: { stepSize: 1, color: "#A1A1AA" },
//         grid: { drawOnChartArea: false },
//       },
//       x: {
//         ticks: { color: "#A1A1AA" },
//         grid: { display: false },
//       },
//     },
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-gray-900 min-h-screen">
//       <div
//         className="bg-gray-800 shadow-lg rounded-lg p-6"
//         style={{ height: "400px" }}
//       >
//         <h2 className="text-xl font-semibold text-gray-200 mb-4">
//           Temperature Trends
//         </h2>
//         <Line ref={tempChartRef} data={tempData} options={options} />
//       </div>

//       <div
//         className="bg-gray-800 shadow-lg rounded-lg p-6"
//         style={{ height: "400px" }}
//       >
//         <h2 className="text-xl font-semibold text-gray-200 mb-4">
//           Humidity & Wind Speed Trends
//         </h2>
//         <Bar ref={mergedChartRef} data={mergedData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default WeatherChart;


import React, { useRef, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const WeatherChart = ({ data }) => {
  const tempChartRef = useRef(null);
  const mergedChartRef = useRef(null);

  const tempData = {
    labels: data.map((item) => item.city),
    datasets: [
      {
        label: "Avg Temp (°C)",
        data: data.map((item) => item.avgTemp),
        backgroundColor: "#f97316",
        borderColor: "#fb923c",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Max Temp (°C)",
        data: data.map((item) => item.tempMax),
        borderColor: "#f43f5e",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Min Temp (°C)",
        data: data.map((item) => item.tempMin),
        borderColor: "#38bdf8",
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const mergedData = {
    labels: data.map((item) => item.city),
    datasets: [
      {
        label: "Humidity (%)",
        data: data.map((item) => item.humidity),
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        yAxisID: "y1",
      },
      {
        label: "Wind Speed (m/s)",
        data: data.map((item) => item.windSpeed),
        backgroundColor: "rgba(255, 159, 64, 0.8)",
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y1: { position: "left" },
      y2: { position: "right" },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div
        className="bg-white shadow-lg rounded-lg p-6"
        style={{ height: "400px" }}
      >
        <h2 className="text-xl font-semibold">Temperature Trends</h2>
        <Line ref={tempChartRef} data={tempData} options={options} />
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6"
        style={{ height: "400px" }}
      >
        <h2 className="text-xl font-semibold">Humidity & Wind Speed</h2>
        <Bar ref={mergedChartRef} data={mergedData} options={options} />
      </div>
    </div>
  );
};

export default WeatherChart;
