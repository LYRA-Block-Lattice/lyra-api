import { GraphQLJSON } from "graphql-type-json";
import { BlockSchema } from "./BlockSchema";
import { blockTypeResolvers, BlockTypes } from "./BlockTypes";
import { DefaultSchema } from "./DefaultSchema";

/**
 * @description holds all schemas
 */

const jsonResolver = {
  JSON: GraphQLJSON
};

export const schema = [DefaultSchema, BlockTypes, BlockSchema];
export const enumResolvers = [jsonResolver, blockTypeResolvers];
