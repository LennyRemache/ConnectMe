import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
    views: {
      type: Number,
      default: 0,
    },
    visits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default linkSchema;
