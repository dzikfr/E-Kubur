const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  role: { type: DataTypes.ENUM('admin', 'pembeli', 'penjual'), allowNull: false, defaultValue: 'pembeli' },
}, {
  timestamps: true,
});

module.exports = User;