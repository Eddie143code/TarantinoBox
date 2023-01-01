const User = require("../models/userModel");

const authorise = async (req, res, next) => {
  if (!req.session) {
    throw new Error("Not logged in");
  }
  if (req.headers.id) {
    req.user = req.headers.id;
  }
  next();
};

module.exports = {
  authorise,
};
