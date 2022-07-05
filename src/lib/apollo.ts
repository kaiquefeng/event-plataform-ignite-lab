import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4omdwxj0f8m01xxdohs0wy6/master",
  cache: new InMemoryCache(),
});
