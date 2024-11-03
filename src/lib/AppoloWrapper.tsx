"use client";

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export function ApolloWrapper({children}: {children: React.ReactNode}) {
  const client = new ApolloClient({
    uri:
      process.env.NEXT_PUBLIC_GRAPHQL_URL ||
      "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
