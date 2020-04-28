const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


// function for salting and hashing the password.
userSchema.pre("save", function (next) {
  // in here using es5 function keyword bcz the user object is available in this function through this keyword and in arrow funcs we don't have this.  
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// functions for validating hashed password when user logs back in.
userSchema.methods.comparePassword = function (candidatePassword) {
  const user = this;
  return new Promise((res, rej) => {
    //used promise here bcz bcrypt library itself uses callbacks that nowadays are not as good as promises.
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) return rej(err);

      if (!isMatch) return rej(false);

      res(true);
    });
  });
};

mongoose.model("User", userSchema);