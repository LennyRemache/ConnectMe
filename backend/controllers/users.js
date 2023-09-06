import { User } from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.params.userName });
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const updateTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const user = await User.findOne({ userName: req.params.userName });
    user.profile.appearance.title = title;
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const updateBio = async (req, res) => {
  try {
    const { bio } = req.body;
    const user = await User.findOne({ userName: req.params.userName });
    user.profile.appearance.bio = bio;
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const updatePicture = async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.params.userName });
    const imagePath = req.file;
    user.profile.appearance.picturePath = `${imagePath}`;
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
