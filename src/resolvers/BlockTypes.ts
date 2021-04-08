import { GraphQLEnumType } from "graphql";

const BlockTypeEnum = new GraphQLEnumType({
  name: "BlockTypes",
  values: {
    Null: {
      value: 0
    },
    Service: {
      value: 11
    },
    Consolidation: {
      value: 12
    },
    Sync: {
      value: 13
    },
    LyraTokenGenesis: {
      value: 20
    },
    OpenAccountWithReceiveTransfer: {
      value: 21
    },
    OpenAccountWithReceiveFee: {
      value: 22
    },
    OpenAccountWithImport: {
      value: 23
    },
    TokenGenesis: {
      value: 30
    },
    SendTransfer: {
      value: 31
    },
    ReceiveTransfer: {
      value: 32
    },
    ReceiveFee: {
      value: 33
    },
    ImportAccount: {
      value: 34
    },
    ReceiveMultipleFee: {
      value: 35
    },
    ReceiveAuthorizerFee: {
      value: 36
    },
    TradeOrder: {
      value: 40
    },
    Trade: {
      value: 41
    },
    ExecuteTradeOrder: {
      value: 42
    },
    CancelTradeOrder: {
      value: 43
    },
    PoolFactory: {
      value: 50
    },
    PoolGenesis: {
      value: 51
    },
    PoolDeposit: {
      value: 52
    },
    PoolWithdraw: {
      value: 53
    },
    PoolSwapIn: {
      value: 54
    },
    PoolSwapOut: {
      value: 55
    }
  }
});
export default BlockTypeEnum;
