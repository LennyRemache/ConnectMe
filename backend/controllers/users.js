import { User } from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.find(req.params.id);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
