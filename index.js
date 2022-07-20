const express = require("express");
const app = express();
app.use(express.json())
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration); // connect to DB via knex using env's settings
console.log(database);

database.raw("select 1+1 as result").then(function () {
  console.log("connected to db");
});
console.log("HELLO" + process.env.PORT);
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const usersRouter = require("./routes/users");

app.use("/admin", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
