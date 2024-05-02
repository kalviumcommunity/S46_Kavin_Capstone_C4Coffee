const { GraphQLScalarType } = require("graphql");
const { formatDistanceToNow } = require("date-fns");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type for handling date objects",

  serialize(value) {
    try {
      const date = value instanceof Date ? value : new Date(value);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (e) {
      throw new Error("Invalid date provided for DateAgo");
    }
  },
});

module.exports = dateScalar;
