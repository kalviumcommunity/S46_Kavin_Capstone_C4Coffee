const router = require("express").Router();
const multer = require("multer");

const { addShopReview } = require("../controller/shopReviewController");

const upload = multer();

router.post("/addReview", upload.single('image'), addShopReview);

module.exports = router;
