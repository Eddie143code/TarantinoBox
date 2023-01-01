const express = require("express");
const authorise = require("../middleware/authMiddleware");
const router = express.Router();
const {
  createReview,
  getAllUserReview,
  deleteReview,
} = require("../controllers/reviewController");

router.post("/", createReview);
router.get("/", getAllUserReview);
router.delete("/:id", deleteReview);

module.exports = router;
