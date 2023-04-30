const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const schema = require("./model");
const jwt = require("jsonwebtoken");
const middleware = require('./middleware')
const cors = require('cors')
app.use(cors())

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password, confirmpassword } = req.body;
    const exist = await schema.findOne({ email });

    if (exist) {
      return res.send("User Already Exist");
    }
    if (password !== confirmpassword) {
      return res.send("Passwords are Not Matching");
    }
   
    const newUser = new schema({
      username,
      email,
      password,
      confirmpassword,
    });
    await newUser.save();
    res.status(200).send("Registered Succesfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error")
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const exist = await schema.findOne({ email });
    if (!exist) {
      return res.send("User Not Found");
    }
    if (password !== exist.password) {
      return res.send("Incorrect Password Entered");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };

    jwt.sign(payload, "MyKey", { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      return res.json({ token });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server Error")
  }
});

app.get("/home", middleware, async (req, res) => {
  try {
    console.log("heoo")
    let exist = await schema.findById(req.user.id);

    if (!exist) {
      return res.send("User Not Found");
    }
    res.json(exist)
  } catch (err) {
    console.log(err);
    return res.send("Server Error")
  }
});

app.listen(8000, () => {
  console.log("server running...");
});
