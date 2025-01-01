const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Location = sequelize.define('Location', {
  provinsi: { type: DataTypes.STRING, allowNull: false },
  kota: { type: DataTypes.STRING, allowNull: false },
  alamat_lengkap: { type: DataTypes.TEXT, allowNull: false },
}, {
  timestamps: true,
});

module.exports = Location;