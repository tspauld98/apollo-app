import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
    books: [Book]
    author(id: ID): Author
  }

  type Mutation {
    appendAuthor(author: NewAuthor): Author
    appendBook(book: NewBook): Book
    deleteBook(id: ID): Book
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    fullName: String
    phoneNumber: String
    books: [Book]
  }

  input NewAuthor {
    firstName: String
    lastName: String
    phoneNumber: String
  }

  input NewBook {
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
    author: Author
  }
`;
