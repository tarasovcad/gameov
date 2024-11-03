import {typeDefs} from "@/app/graphql/schema";
import {resolvers} from "@/lib/graphql/resolvers";

import {ApolloServer} from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export {handler as GET, handler as POST};
