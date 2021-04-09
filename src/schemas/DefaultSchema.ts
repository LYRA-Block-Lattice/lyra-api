import { gql } from "apollo-server";

/**
 * @description holds default schema
 */

export const DefaultSchema = `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
