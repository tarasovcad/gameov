import {ApolloClient, InMemoryCache} from "@apollo/client";
import {registerApolloClient} from "@apollo/experimental-nextjs-app-support/rsc";

// Create cache with debugging
const cache = new InMemoryCache({
  resultCaching: false, // Disable result caching
});

export const {getClient} = registerApolloClient(() => {
  return new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "no-cache",
      },
      query: {
        fetchPolicy: "no-cache",
      },
    },
    connectToDevTools: true, // Enable Apollo dev tools
  });
});
