require("./models/User");
require("./models/Track");
const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const trackRouter = require("./routes/trackRoutes");
const bodyParser = require("body-parser");
const requireAuth = require("./middlewares/requireAuth");

const App = express();

App.use(bodyParser.json());
App.use(authRouter);
App.use(trackRouter);

const mongoUri =
  "mongodb+srv://admin:25225624@cluster0-9noml.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB instance.");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongoDB instance: ", err);
});

App.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

App.listen(3000, () => {
  console.log("Listening on port 3000...");
});
