import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const Connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};
