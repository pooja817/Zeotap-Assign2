const mongoose = require("mongoose");

const weatherSummarySchema = new mongoose.Schema(
  {
    date: { type: String, required: true }, // e.g., '2024-10-25'
    city: { type: String, required: true },
    avgTemp: Number,
    maxTemp: Number,
    minTemp: Number,
    feelsLikeAvg: Number, // Average 'feels_like' temperature
    humidity: Number,
    windSpeed: Number,
    dominantCondition: String, // e.g., 'Clear', 'Rain'
    consecutiveAlertCount: { type: Number, default: 0 }, // Track consecutive alerts
    lastUpdated: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DailyWeatherSummary", weatherSummarySchema);
