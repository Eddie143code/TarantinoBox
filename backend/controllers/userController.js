const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  // destructure details from request body
  const { name, email, password } = req.body;

  // Check if all fields had input and if not throw error
  if (!name || !email || !password) {
    throw new Error("Please add all fields");
  }

  // Find if email already exists in database
  const userExists = await User.findOne({ email });

  // If user exists throw error
  if (userExists) {
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    req.session.userid = user.email;
    res.status(201).json({
      user: req.session.userid,
    });
  } else {
    throw new Error("Invalid user data");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("Please provide email and password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userid = user.email;
    res.json({
      user: req.session.userid,
    });
  } else {
    throw new Error("Invalid credentials");
  }
};

const signout = async (req, res) => {
  req.session.user_id = null;
  req.session = null;
};

module.exports = {
  signup,
  login,
  signout,
};
