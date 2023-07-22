import express from "express";
//const bodyParser = require("body-parser");
import cors from "cors";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";
import { register } from "./controllers/auth.js";
import { Connect } from "./db/mongoose.js";

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); // initializing express server side application

// connecting server to the database
Connect(); // needed when recieving data from front-end into the back-end that will be pushed into the db vice versa

// needed to fix error where post request body is undefined and causes validationError
app.use(express.json());
app.use(cors()); // makes it possible to make api calls from the client side
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // where to store the files
    cb(null, "/public/assets");
  },
  filename: function (req, file, cb) {
    // how the files should be named
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }); // anytime a file is uploaded this variable will be used

/* ROUTES WITH FILES */
// (route, middleware, controller)
app.post("/auth/register", upload.single("picture"), register); // Routes HTTP POST requests to the specified path with the specified callback functions

app.listen(3001, (req, res) => {
  console.log("Server Running at Port 3001");
});
