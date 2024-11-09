import {gql} from "graphql-tag";

export const typeDefs = gql`
  enum PostStatus {
    DRAFT
    PUBLISHED
    SCHEDULED
  }

  type SystemRequirements {
    os: String
    processor: String
    memory: String
    graphics: String
    storage: String
  }

  type FaqItem {
    question: String
    answer: String
  }

  type User {
    id: ID!
    name: String
    email: String
    posts: [Post!]
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    slug: String!
    date: String!
    downloadLink: String!
    tags: [String!]!
    appVersion: String
    platforms: [String!]!
    publisher: String
    releasedDate: String
    authorUserName: String
    interfaceLanguages: [String!]!
    voiceLanguages: [String!]!
    systemRequirements: SystemRequirements!
    cardDescription: String!
    faqList: [FaqItem!]!
    images: [String!]!
    author: User!
    authorId: String!
    status: PostStatus!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    posts(status: PostStatus): [Post!]!
    post(slug: String!): Post
  }
`;
