const { books } = require('./db')

const typeDefs = `
  type Book {
    title: String
    author: String
    price: Int
  }

  type Query {
    books: [Book]
  }
`

const resolvers = {
  Query: {
    books: () => books,
  },
}

module.exports = {
  typeDefs,
  resolvers
}