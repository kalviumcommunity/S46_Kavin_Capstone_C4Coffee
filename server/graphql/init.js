const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startGraphqlServer(app) {
  await server.start();
  app.use("/graphql", expressMiddleware(server));
}

module.exports = startGraphqlServer;
