require("dotenv").config();
const mongoose = require("mongoose");

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
      validate: {
        validator: function (email) {
          return process.env.EMAIL_REGEX.test(email);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    description: {
      type: String,
    },
    links: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true } // provides dates and time of when a new user is CRUD
);

const User = mongoose.model("User", userSchema);

module.exports = User;
