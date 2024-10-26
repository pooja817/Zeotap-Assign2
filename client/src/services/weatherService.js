import axios from "axios";

const API_BASE = "http://localhost:5001/api/weather";

export const fetchWeatherSummaries = async () => {
  try {
    const response = await axios.get(`${API_BASE}/update`);
    console.log("API Response:", response.data); // Debugging log
    return response.data.weatherSummaries;
  } catch (error) {
    console.error("Error fetching weather data:", error); // Debugging error
    throw error;
  }
};
