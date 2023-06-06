const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require('./models/user.model')

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
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

  if (user) {
    return res.json({ status: 'success', user: true });
  } else {
    return res.json({ status: 'error', user: false });
  }
});

app.listen(1337, () => {
  console.log("listening on http://localhost:1337");
});
