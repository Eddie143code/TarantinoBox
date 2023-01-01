const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: [30],
  },
  content: {
    type: String,
    required: true,
    trim: true,
    minlength: [1],
  },
  tag: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: String,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
