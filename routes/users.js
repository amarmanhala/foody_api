const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json())

router.post("/", async (req, res) => {
  try {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  res.status(201).json(email);
  res.send("Hello Login!");
}
catch(err) {
  res.status(500).send(err.message);
}
});

module.exports = router;