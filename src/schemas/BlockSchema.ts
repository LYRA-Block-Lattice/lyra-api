import { gql } from "apollo-server";

/**
 * @description holds Block schema
 */

export const BlockSchema = gql`
  scalar Date
  scalar JSON

  type Block {
    id: ID!
    Hash: String!
    Height: Int!
    TimeStamp: Date!
    Version: Int!
    BlockType: BlockTypes!
    PreviousHash: String
    ServiceHash: String
    Tags: JSON
  }

  extend type Block {
    # // ConsolidationBlock
    blockHashes: JSON
    MerkelTreeHash: String
    totalBlockCount: Int
    totalFees: Int
    createdBy: String
    # // TokenGenesisBlock
    Ticker: String
    DomainName: String
  }

  extend type Query {
    Blocks: [Block]
    Block(Hash: String!): Block
  }
`;
