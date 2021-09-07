const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  username: { type: String, minlength: 3, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
});

const exerciseModel = mongoose.model("exerciseCollection", exerciseSchema);

module.exports = exerciseModel;
