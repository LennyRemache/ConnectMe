const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://lennyjremache:${process.env.MONGODB_PW}@cluster0.ek4y1s0.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
