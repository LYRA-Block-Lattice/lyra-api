import BlockModel, { IBlock } from "../models/BlockModel";
import { ApolloError } from "apollo-server";

/**
 *
 * @description holds crud operations for the Block entity
 */

/**
 * gets all Blocks
 * @param connection database connection
 * @returns {IBlock[]} Block list
 */
export const getAllBlocks = async (connection) => {
  let list: IBlock[];

  try {
    list = await BlockModel(connection).find();
    if (list != null && list.length > 0) {
      list = list.map((u) => {
        return u.transform();
      });
    }
  } catch (error) {
    console.error("> getAllBlocks error: ", error);
    throw new ApolloError("Error retrieving all Blocks");
  }

  return list;
};

/**
 * gets Block by id
 * @param connection database connection
 * @param id Block id
 * @returns {IBlock | null} Block or null
 */
export const getBlock = async (connection, id: string) => {
  let Block: IBlock | null;

  try {
    Block = await BlockModel(connection).findById(id);
    if (Block != null) {
      Block = Block.transform();
    }
  } catch (error) {
    console.error("> getBlock error: ", error);
    throw new ApolloError("Error retrieving Block with id: " + id);
  }

  return Block;
};
