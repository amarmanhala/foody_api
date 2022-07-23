if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration); // connect to DB via knex using env's settings

module.exports = database;