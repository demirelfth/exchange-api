const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eva', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;