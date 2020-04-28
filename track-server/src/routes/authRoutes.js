const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });

    await user.save();

    const token = jwt.sign({ userId: user._id }, "MY_SECRETE_KEY");
    res.send({ token });
  } catch (err) {
    res.status(422).send(err);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "Must provide an email and a password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "Invalid email or password" });
  }

  try {
    await user.comparePassword(password); //comparePassword is from ../models/Users.js. as user is also an instance of User model.

    const token = jwt.sign({ userId: user._id }, "MY_SECRETE_KEY"); //generating token for the further requests after login is succeeded.
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid email or password" });
  }
});

module.exports = router;
