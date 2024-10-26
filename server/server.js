const express = require("express");
const mongoose = require("mongoose");
const weatherRoutes = require("./routes/weatherRoutes");
const cors = require("cors"); // Import CORS middleware
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for all routes and origins
app.use(cors());

// Middleware
app.use(express.json());
app.use("/api/weather", weatherRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schedule weather updates every 5 minutes
setInterval(() => {
  fetch(`http://localhost:${PORT}/api/weather/update`)
    .then(() => console.log('Weather data updated'))
    .catch(err => console.error('Error fetching weather data:', err));
}, 300000);  // 5 minutes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
