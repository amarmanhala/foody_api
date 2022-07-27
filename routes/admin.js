const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const database = require("../db");
const schema = require("../utils/loginValidationSchema");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const value = await schema.validateAsync({ email: email, password: password });
    if (value.error) {
      res.status(400).send(value);
    }

    database('users').where('email', email).then(data => {
      console.log("Waheguru" + data)
      res.send(data);
      
    }).catch(e => {
      console.error(e)
    });

   // res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
module.exports = router;
