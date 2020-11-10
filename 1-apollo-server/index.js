
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
    price: Int
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    price: 100
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is running... ${url}`);
});