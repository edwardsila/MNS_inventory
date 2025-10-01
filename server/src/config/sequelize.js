const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/test.sqlite',
  logging: false,
});

module.exports = sequelize;