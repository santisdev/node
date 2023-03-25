const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../.env" });
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  { host: "localhost", dialect: "postgres", schema: "ecommerce" }
);

var sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000,
  expiration: 7 * 24 * 60 * 60 * 1000,
});

module.exports = { sequelize, sessionStore };
