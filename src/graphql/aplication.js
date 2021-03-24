const { createApplication } =  require('graphql-modules');
const  {userModule }= require('./user.module');

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
  modules: [userModule],
});

module.exports = {
    application
}