const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/proxyController');

router.get('/current', weatherController.getCurrentWeather);
router.get('/future', weatherController.getFutureWeather);
router.get('/timeZone', weatherController.getTimezoneData);
router.get('/coin',weatherController.coinController)

module.exports = router;
