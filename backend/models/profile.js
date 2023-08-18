import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    picturePath: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    links: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default profileSchema;
