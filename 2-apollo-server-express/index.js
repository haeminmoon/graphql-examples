const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const { typeDefs, resolvers } = require('./resources/schema')

const schema = makeExecutableSchema({ 
  typeDefs, 
  resolvers,
  // logger, // optional
  // allowUndefinedInResolve = false, // optional
  // resolverValidationOptions = {}, // optional
  // directiveResolvers = null, // optional
  // schemaDirectives = null,  // optional
  // parseOptions = {},  // optional
  // inheritResolversFromInterfaces = false  // optional
})

// https://www.apollographql.com/docs/apollo-server/api/apollo-server/ 각종 옵션 분석 필요
const server = new ApolloServer({ schema })

const app = express()
server.applyMiddleware({ app })

// Apollo Server can internally configure various middleware (including body parsing, the GraphQL Playground frontend, CORS support, etc.) 
// without needing to separately apply those to the app with middleware mechanisms like Express.js' app.use.
// 실제 서버 구성시에는 app.use에 필요한 미들웨어를 셋팅해 주면 될 듯.
app.listen({ port: 4000 }, () =>
  console.log(`Server is running... http://localhost:4000${server.graphqlPath}`)
)