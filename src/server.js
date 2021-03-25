const { ApolloServer, gql } = require('apollo-server')
const { application } = require('./graphql/aplication')

const schema = application.createSchemaForApollo()

const server = new ApolloServer({
  schema,
  context: async ({ req }) => ({ req }),
  uploads: {
    maxFileSize: 10000000, // 10 MB
    maxFiles: 20
  },
  playground: true
})

module.exports = server
