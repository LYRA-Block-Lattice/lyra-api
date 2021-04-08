import { BlockResolver } from "./BlockResolver";
import { dateResolver } from "./dateResolver";

/**
 * @description holds all resolvers
 */

//www.apollographql.com/docs/tutorial/resolvers/

export const resolvers = [BlockResolver, dateResolver];
