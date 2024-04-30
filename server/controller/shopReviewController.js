const ShopReview = require("../models/shopReviewModel");

async function addShopReview(req, res) {
  if (req.error) {
    return res.status(req.status).send(req.error);
  }
  const { id } = req.user;
  const { name, desc, rating } = req.body;

  const newShopReview = await ShopReview.create({
    name,
    desc,
    rating,
    userId: id,
  });

  res.status(201).json({ newShopReview });
}

module.exports = { addShopReview };
