import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

// REGISTER USER
export const register = async (req, res) => {
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

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    delete user.password; // prevent password from being sent to the frontend
    res.status(201).json({ token, user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
