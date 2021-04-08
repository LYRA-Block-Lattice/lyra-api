import { UserResolver } from "./UserResolver";
import { BlockResolver } from "./BlockResolver";
import { dateResolver } from "./dateResolver";
import { IResolvers } from "graphql-tools";
import BlockTypeEnum from "./BlockTypes";

/**
 * @description holds all resolvers
 */

//www.apollographql.com/docs/tutorial/resolvers/
const blockTypeResolvers = {
  BlockTypes: {
    Null: 0,
    Service: 11,
    Consolidation: 12,
    Sync: 13,
    LyraTokenGenesis: 20,
    OpenAccountWithReceiveTransfer: 21,
    OpenAccountWithReceiveFee: 22,
    OpenAccountWithImport: 23,
    TokenGenesis: 30,
    SendTransfer: 31,
    ReceiveTransfer: 32,
    ReceiveFee: 33,
    ImportAccount: 34,
    ReceiveMultipleFee: 35,
    ReceiveAuthorizerFee: 36,
    TradeOrder: 40,
    Trade: 41,
    ExecuteTradeOrder: 42,
    CancelTradeOrder: 43,
    PoolFactory: 50,
    PoolGenesis: 51,
    PoolDeposit: 52,
    PoolWithdraw: 53,
    PoolSwapIn: 54,
    PoolSwapOut: 55
  }
};

export const resolvers = [
  UserResolver,
  BlockResolver,
  dateResolver,
  blockTypeResolvers
];
