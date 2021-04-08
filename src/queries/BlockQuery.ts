import { getAllBlocks, getBlock } from "../controllers/BlockController";

/**
 * @description holds Block queries
 */

export const BlockQuery = {
  Blocks: {
    resolve: async (parent, args, context, info) => {
      return await getAllBlocks(context.dbConn);
    }
  },
  Block: {
    resolve: async (parent, args, context, info) => {
      return await getBlock(context.dbConn, args.id);
    }
  }
};
