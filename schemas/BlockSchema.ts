import { gql } from "apollo-server";

/**
 * @description holds Block schema
 */

export const BlockSchema = gql`
  type Block {
    id: ID!
    Version: Number!
    Height: Number!
    TimeStamp: Date!
  }

  extend type Query {
    Blocks: [Block]
    Block(id: String!): Block
  }
`;
