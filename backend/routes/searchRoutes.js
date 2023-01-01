const express = require("express");

const router = express.Router();
const { getAllSearchReviews } = require("../controllers/searchController");

router.get("/", getAllSearchReviews);

module.exports = router;
