const { GraphQLScalarType } = require("graphql");

const bufferScalar = new GraphQLScalarType({
  name: "Buffer",
  description:
    "A Buffer scalar type that handles binary data using Base64 encoding",

  serialize(value) {
    return value.toString("base64");
  },

  parseValue(value) {
    return Buffer.from(value, "base64");
  },

  parseLiteral(ast) {
    if (ast.kind === "StringValue") {
      return Buffer.from(ast.value, "base64");
    }
    return null;
  },
});

module.exports = bufferScalar;
