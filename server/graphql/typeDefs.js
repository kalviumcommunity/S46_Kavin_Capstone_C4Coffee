const typeDefs = `#graphql
    scalar Buffer
    scalar Date

    type User {
        username: String!,
        userId: String!
    }

    type Shop {
        name: String!,
        desc: String!,
        userId: User!,
        rating: Int!,
        image: Buffer!,
        comment: [Comment!],
        createdAt: Date!
    }

    type Comment {
        shopId: Shop!,
        userId: User!,
        content: String!,
        rating: Int!,
        createdAt: Date!
    }

    type Query {
        allReviews: [Shop]!
    }
`;

module.exports = typeDefs;
