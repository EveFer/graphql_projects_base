const { ApolloServer, gql } = require('apollo-server');
const  {application}  = require('./graphql/aplication');

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
});

module.exports = server;