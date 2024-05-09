const {GraphQLError} = require('graphql')

const ShopReview = require("../models/shopReviewModel");
const Comment = require("../models/commentModel");
const User = require("../models/userModel");

const dateScalar = require("./scalars/dateScalar");
const bufferScalar = require("./scalars/bufferScalar");

function throwError() {
  throw new GraphQLError("User is not authenticated", {
    extensions: {
      code: "UNAUTHENTICATED",
      http: { status: 401 },
    },
  });
}

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
      return await parent.comment.map(async (id) => await Comment.findById(id));
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
  Mutation: {
    async updateReview(_, args, context) {
      if (context.error) {
        throwError();
      } else {
        return await ShopReview.findByIdAndUpdate(args.id, { ...args.input });
      }
    },
    async updateComment(_, args, context) {
      if (context.error) {
        throwError();
      } else {
        return await Comment.findByIdAndUpdate(args.id, { ...args.input });
      }
    },
    async deleteReview(_, args, context) {
      if (context.error) {
        throwError();
      } else {
        const shop = await ShopReview.findByIdAndDelete(args.id);
        await shop.comment.forEach(
          async (c) => await Comment.findByIdAndDelete(c)
        );
        console.log(shop);
        return shop;
      }
    },
    async deleteComment(_, args, context) {
      if (context.error) {
        throwError();
      } else {
        const comment = await Comment.findByIdAndDelete(args.id);
        await ShopReview.findByIdAndUpdate(comment.shopId, {
          $pull: { comment: args.id },
        });
        return comment;
      }
    },
  },
};

module.exports = resolvers;
