import { gql } from "apollo-server";

/**
 * @description holds Block schema
 */

export const BlockSchema = gql`
  type Block {
    id: ID!
    Hash: String!
  }

  extend type Query {
    Blocks: [Block]
    Block(Hash: String!): Block
  }
`;
