const { createModule, gql } = require('graphql-modules')
const { ApolloError } = require('apollo-server')
const users = require('../useCases/user')

const userModule = createModule({
  id: 'users-module',
  dirname: __dirname,
  typeDefs: gql`
    type Address {
        country: String
        street: String
    }
    
    type User {
        name: String
        lastName: String
        address: Address
    }

    input AddressInput {
        country: String
        street: String
    }
    input UserInput {
        name: String!
        lastName: String!
        address: AddressInput
    }

    type Query {
        users: [User]
    } 
    type Mutation {
        user(input: UserInput!): User
    }
  `,
  resolvers: {
    Query: {
      users: async () => {
        try {
          const userAll = users.getAll()
          return userAll
        } catch (error) {
          throw new ApolloError(error)
        }
      }
    },
    Mutation: {
      user: async (_, { input }, ctx) => {
        try {
          const userCreated = users.create(input)
          return userCreated
        } catch (error) {
          throw new ApolloError(error)
        }
      }
    }
  }
})

module.exports = { userModule }
