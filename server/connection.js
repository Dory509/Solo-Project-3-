const { Sequelize } = require("sequelize");
require("dotenv").config();

// Option 1: Passing a connection URI
const sequelize = new Sequelize(
  `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}`
); // Example for postgres

module.exports = sequelize;