require("dotenv").config();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
});
