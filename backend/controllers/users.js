import { User } from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { title } = req.body;
    const user = await User.findById(req.params.id);
    user.profile.appearance.title = title;
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
