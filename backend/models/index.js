const sequelize = require('../config/database');
const User = require('./user');
const Location = require('./location');

// Sync database
sequelize.sync({ alter: true })
  .then(() => console.log('Database synchronized'))
  .catch((error) => console.error('Error synchronizing database:', error));

module.exports = { sequelize, User, Location };