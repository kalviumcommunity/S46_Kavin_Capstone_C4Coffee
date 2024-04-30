const router = require("express").Router();
const multer = require("multer");

const { addShopReview } = require("../controller/shopReviewController");

const upload = multer();

router.post("/addReview", upload.none(), addShopReview);

module.exports = router;
