const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3, unique: true },
  password: { type: String, minlength: 3 },
});

const userModel = mongoose.model("usersCollection", userSchema);

module.exports = userModel;
