const { Pool } = require("pg");

module.exports = new Pool({
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.PORT,
  host: process.env.HOST,
});

