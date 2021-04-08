import { UserResolver } from "./UserResolver";
import { BlockResolver } from "./BlockResolver";
import { resolverMap } from "./resolverMap";

/**
 * @description holds all resolvers
 */

export const resolvers = [UserResolver, BlockResolver, resolverMap];
