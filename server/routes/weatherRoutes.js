const express = require("express");
const { updateWeather } = require("../controllers/weatherController");
const router = express.Router();

// Route to update weather data
router.get("/update", updateWeather);

module.exports = router;
