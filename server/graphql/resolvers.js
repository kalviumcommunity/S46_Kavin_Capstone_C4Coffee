const ShopReview = require("../models/shopReviewModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

const dateScalar = require("./scalars/dateScalar");
const bufferScalar = require("./scalars/bufferScalar");

const resolvers = {
  Date: dateScalar,
  Buffer: bufferScalar,
  Query: {
    async allReviews() {
      return await ShopReview.find({});
    },
  },
  Shop: {
    async comment(parent) {
      const comments = await parent.comment.map(
        async (id) => await Comment.findById(id)
      );
      return comments;
    },
    async userId(parent) {
      return await User.findById(parent.userId);
    },
  },
  Comment: {
    async shopId(parent) {
      return await ShopReview.findById(parent.shopId);
    },
    async userId(parent) {
      return await User.findById(parent.userId);
    },
  },
};

module.exports = resolvers;
