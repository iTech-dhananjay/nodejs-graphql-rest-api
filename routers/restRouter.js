// routers/graphqlRouter.js
const express = require('express');
const {GraphQLObjectType } = require('graphql-http'); // Update the import
const { buildSchema } = require('graphql');
const userService = require('../services/user');

const schema = buildSchema(`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(username: String!, email: String!): User
  }
`);

const root = {
    users: userService.getAllUsers,
    createUser: ({ username, email }) => userService.createUser({ username, email }),
};

const router = express.Router();

router.use(
    '/graphql',
    GraphQLObjectType({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

module.exports = router;
