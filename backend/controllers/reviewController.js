const Review = require("../models/reviewModel");
const User = require("../models/userModel");

const createReview = async (req, res) => {
  const user = req.body.user;

  const name = await User.find({ email: user });
  const review = await Review.create({
    title: req.body.title,
    content: req.body.content,
    tag: req.body.tag,
    user: user,
    name: name[0].name,
  });

  res.status(201).json({ review });
};

const getAllUserReview = async (req, res) => {
  const userSearch = JSON.parse(req.user);
  const user = await User.find({ email: userSearch });

  const reviewSearch = user[0].name;
  const reviews = await Review.find({ name: reviewSearch });
  res.status(201).json(reviews);
};

const deleteReview = async (req, res) => {
  const data = req.user;
  const review = await Review.findByIdAndDelete(data);

  res.status(201).json(review);
};

module.exports = {
  createReview,
  getAllUserReview,
  deleteReview,
};
