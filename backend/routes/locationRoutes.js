const express = require('express');
const { getAllLocations, createLocation } = require('../controllers/locationController');

const router = express.Router();

router.get('/', getAllLocations);
router.post('/', createLocation);

module.exports = router;