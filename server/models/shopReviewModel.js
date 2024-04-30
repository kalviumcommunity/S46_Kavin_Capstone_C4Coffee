const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopReviewSchema = new Schema(
  {
    name: String,
    desc: String,
    image: Buffer,
    rating: Number,
    userId: String,
    comment: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShopReview", shopReviewSchema);
