require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = require("./models/userModel");

const app = express();
const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_URL;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb Atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/register", (req, res) => {
  try {
    bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      const newUser = new User({
        email: req.body.email,
        password: hash,
      });
      await newUser.save();
      res.status(201).json(newUser);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          res.status(200).json({ status: "Valid User." });
        } else {
          res.status(404).json({ status: "User Not found." });
        }
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Route not found
app.use((req, res) => {
  res.status(400).send("Route not found");
});

// Server error
app.use((err, req, res, next) => {
  res.status(500).send("Internal server error.");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
