import { BlockQuery } from "../queries/BlockQuery";
import { IResolvers } from "apollo-server";

/**
 * @description holds Block resolver
 */

export const BlockResolver: IResolvers = {
  Query: BlockQuery
};
