const express = require("express");
const app = express();
app.use(express.json())
const database = require("./db");

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
