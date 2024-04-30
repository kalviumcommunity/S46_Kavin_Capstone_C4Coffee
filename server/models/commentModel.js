const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    userId: String,
    shopId: String,
    content: String,
    rating: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
