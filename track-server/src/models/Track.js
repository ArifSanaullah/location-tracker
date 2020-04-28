const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // this ref is actually the ref to userSchema. express will identify this object as an instance of User model's class. or User schema.
  },
  name: {
    type: String,
    default: "",
  },
  locations: [pointSchema],
});

mongoose.model("Track", trackSchema); // here I didn't did the same for pointSchema. reason is that mongoose.model ties a schema to mongoose => mongoDB and we don't want to tie pointSchema to mongoose as it is not going to have any collection of pointSchema instead we are using that in trackSchema.
