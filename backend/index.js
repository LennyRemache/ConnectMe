const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); // initializing express server side application

// connecting server to the database
require("./db/mongoose"); // needed when recieving data from front-end into the back-end that will be pushed into the db vice versa

// needed to fix error where post request body is undefined and causes validationError
app.use(express.json());
app.use(cors()); // makes it possible to make api calls from the client side

app.listen(3001, (req, res) => {
  console.log("Server Running at Port 3001");
});
