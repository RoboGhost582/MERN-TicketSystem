const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a name"],
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      require: [true, "Please add a email"],
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please add a password"],
      min: 6,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false,
      },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);