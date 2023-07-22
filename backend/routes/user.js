const express = require("express");
const user = require("../models/user");
const router = express.Router();

require("../models/user");

router.post("/", (req, res) => {
  const newUser = new user(req.body);

  newUser
    .save()
    .then((newUser) => {
      res.status(201).send(newUser);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
