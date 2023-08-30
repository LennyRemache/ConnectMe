import mongoose from "mongoose";
import linkSchema from "./link.js";
import appearanceSchema from "./appearance.js";

const profileSchema = new mongoose.Schema(
  {
    links: {
      type: [linkSchema],
      default: [],
    },
    appearance: {
      type: appearanceSchema,
      default: {},
    },
  },
  { timestamps: true }
);

export default profileSchema;
