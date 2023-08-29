import express from "express";
//const bodyParser = require("body-parser");
import cors from "cors";
import { Connect } from "./db/mongoose.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

/* CONFIGURATIONS */
const app = express(); // initializing express server side application

// connecting server to the database
Connect(); // needed when recieving data from front-end into the back-end that will be pushed into the db vice versa

// needed to fix error where post request body is undefined and causes validationError
app.use(express.json());
app.use(cors()); // makes it possible to make api calls from the client side

/* ROUTES */
app.use("/auth", authRoutes);

// GET DATA
app.use("/user", userRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server Running at ${process.env.PORT}`);
});
