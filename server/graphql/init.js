const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const authorizeToken = require("../middleware/tokenAuthorizer");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startGraphqlServer(app) {
  await server.start();
  app.use(
    "/graphql",
    authorizeToken,
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        if (req.error) {
          return { error: "User is not authenticated" };
        }
        return { user: req.user.id };
      },
    })
  );
}

module.exports = startGraphqlServer;
