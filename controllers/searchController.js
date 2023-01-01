const Review = require("../models/reviewModel");

const getAllSearchReviews = async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json({ reviews });
};

module.exports = {
  getAllSearchReviews,
};
