const { Pool } = require("pg");
require("dotenv").config({ path: "../.env" });
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
