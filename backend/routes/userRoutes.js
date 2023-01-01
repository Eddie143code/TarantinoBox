const express = require("express");
const router = express.Router();

const { signup, login, signout } = require("../controllers/userController");

router.post("/signup", signup);
router.post("/login", login);
router.post("/signout", signout);

module.exports = router;
