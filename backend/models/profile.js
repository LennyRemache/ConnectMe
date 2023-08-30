import mongoose from "mongoose";
import linkSchema from "./link.js";
import appearanceSchema from "./appearance.js";

const profileSchema = new mongoose.Schema(
  {
    links: {
      type: [linkSchema],
    },
    appearance: {
      type: appearanceSchema,
    },
  },
  { timestamps: true }
);

export default profileSchema;
