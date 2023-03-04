const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../.env" });

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  { host: "localhost", dialect: "postgres" }
);

module.exports = sequelize;
