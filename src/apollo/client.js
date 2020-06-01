import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
  uri: 'https://gql-2.test.serafim.help/v1/graphql',
  headers: {
    'x-hasura-admin-secret': '123-123-123-123-123',
  },
  fetch,
});
