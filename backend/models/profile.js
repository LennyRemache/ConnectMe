import mongoose from "mongoose";
import linkSchema from "./link";
import appearanceSchema from "./appearance";

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
