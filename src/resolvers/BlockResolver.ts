import { BlockQuery } from "../queries/BlockQuery";
import { IResolvers } from "apollo-server";
import BlockTypesEnumType from "./BlockTypes";

/**
 * @description holds Block resolver
 */

export const BlockResolver: IResolvers = {
  Query: BlockQuery
};
