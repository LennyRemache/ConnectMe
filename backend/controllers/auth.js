const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// REGISTER USER

const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      email,
      password,
      picturePath,
      description,
      links,
    } = req.body;

    // encrypt password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // register new user
    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password: passwordHash,
      picturePath,
      description,
      links,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = register;
