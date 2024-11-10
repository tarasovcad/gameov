import {ApolloClient, InMemoryCache} from "@apollo/client";

let client: ApolloClient<any> | null = null;

export function getClient() {
  const baseUrl = process.env.SERVER_HOST || process.env.NEXT_PUBLIC_APP_URL;

  if (!client) {
    client = new ApolloClient({
      uri: `${baseUrl}/api/graphql`,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-first",
        },
        query: {
          fetchPolicy: "cache-first",
        },
      },
      connectToDevTools: typeof window !== "undefined",
    });
  }

  return client;
}

// Optional: Reset client (useful for testing)
export function resetClient() {
  client = null;
}
