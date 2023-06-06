const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require('./models/user.model')
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/react-login-tut");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "OK" });
  } catch (error) {
    res.json({ status: "Error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if(user) {
    const token = jwt.sign({
      name: req.body.name,
      email: req.body.email,
    }, 'secret123')

    return res.json({ status: 'success', user: token });
  } else {
    return res.json({ status: 'error', user: false });
  }
});

app.listen(1337, () => {
  console.log("listening on http://localhost:1337");
});
