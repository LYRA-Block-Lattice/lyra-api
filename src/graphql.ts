import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { enumResolvers, schema } from "./schemas";
import { context } from "./context";

/**
 * @description holds and creates apollo server
 */

const rootResolvers = [...resolvers, ...enumResolvers];

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers: rootResolvers,
  context: context,
  playground: {
    endpoint: "/graphql"
  },
  introspection: true
});

export default apolloServer;
