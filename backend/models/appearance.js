import mongoose from "mongoose";

const appearanceSchema = new mongoose.Schema(
  {
    picturePath: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
      min: 0,
      max: 30,
    },
    bio: {
      type: String,
      default: "",
      min: 0,
      max: 80,
    },
  },
  { timestamps: true }
);

export default appearanceSchema;
