const { Location } = require('../models');

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createLocation = async (req, res) => {
  try {
    const { provinsi, kota, alamat_lengkap } = req.body;
    const location = await Location.create({ provinsi, kota, alamat_lengkap });
    res.status(201).json(location);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllLocations, createLocation };