import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { enumResolvers, schema } from "./schemas";
import { context } from "./context";
const { transpileSchema } = require("graphql-s2s").graphqls2s;
const { makeExecutableSchema } = require("graphql-tools");

/**
 * @description holds and creates apollo server
 */

const rootResolvers = [...resolvers, ...enumResolvers];

const executableSchema = makeExecutableSchema({
  typeDefs: [transpileSchema(schema)],
  resolvers: rootResolvers
});

const apolloServer = new ApolloServer({
  schema: executableSchema,
  context: context,
  playground: {
    endpoint: "/graphql"
  },
  introspection: true
});

export default apolloServer;
