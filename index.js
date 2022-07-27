const express = require("express");
const app = express();
app.use(express.json())
const database = require("./db");
app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

const port = 3000;

app.get("/", (req, res, next) => {
  res.send("Hello World!");
  next();
});

const usersRouter = require("./routes/admin");

app.use("/admin", usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
