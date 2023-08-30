import mongoose from "mongoose";
import profileSchema from "./profile.js";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      min: 1,
      max: 50,
    },
    email: {
      type: String,
      required: true,

      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    profile: {
      type: profileSchema,
    },
  },
  { timestamps: true } // provides dates and time of when a new user is CRUD
);

export const User = mongoose.model("User", userSchema);
