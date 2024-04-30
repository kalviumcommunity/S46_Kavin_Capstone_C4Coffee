const Comment = require("../models/commentModel");
const ShopReview = require("../models/shopReviewModel");

async function addComment(req, res) {
  const { id } = req.user;
  const { desc, rating, shopId } = req.body;

  const newComment = await Comment.create({
    desc,
    rating,
    userId: id,
    shopId,
  });

  const { _id } = newComment;

  await ShopReview.findByIdAndUpdate(shopId, {
    $push: { comment: _id },
  });

  res.status(200).json(newComment);
}

module.exports = { addComment };
