import { gql } from "apollo-server";

/**
 * @description holds Block schema
 */

export const BlockSchema = gql`
  scalar Date
  scalar JSON
  enum BlockTypes {
    Null
    Service
    Consolidation
    Sync
    LyraTokenGenesis
    OpenAccountWithReceiveTransfer
    OpenAccountWithReceiveFee
    OpenAccountWithImport
    TokenGenesis
    SendTransfer
    ReceiveTransfer
    ReceiveFee
    ImportAccount
    ReceiveMultipleFee
    ReceiveAuthorizerFee
    TradeOrder
    Trade
    ExecuteTradeOrder
    CancelTradeOrder
    PoolFactory
    PoolGenesis
    PoolDeposit
    PoolWithdraw
    PoolSwapIn
    PoolSwapOut
  }

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

  extend type Query {
    Blocks: [Block]
    Block(Hash: String!): Block
  }
`;
