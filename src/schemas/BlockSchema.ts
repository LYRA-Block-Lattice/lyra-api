import { gql } from "apollo-server";

/**
 * @description holds Block schema
 */

export const BlockSchema = gql`
  scalar Date
  type Block {
    id: ID!
    Hash: String!
    Height: Int!
    TimeStamp: Date!
  }

  extend type Query {
    Blocks: [Block]
    Block(Hash: String!): Block
  }
`;
