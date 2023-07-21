const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");
const app = express(); // initializing express server side application

// connecting server to the database
require("./db/mongoose"); // needed when recieving data from front-end into the back-end that will be pushed into the db vice versa
