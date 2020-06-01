import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import {InMemoryCache } from 'apollo-cache-inmemory'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from 'apollo-utilities'
import ws from 'ws'



const http = new HttpLink({
  uri: 'https://gql-2.test.serafim.help/v1/graphql',
  headers: {
    'x-hasura-admin-secret': '123-123-123-123-123',
  },
  fetch,
})

const wsForNode = typeof window === 'undefined' ? ws : null

const wsClient = new SubscriptionClient('wss://gql-2.test.serafim.help/v1/graphql',
  {
    reconnect: true,
    connectionParams: () => ({
      headers: {
        'x-hasura-admin-secret': '123-123-123-123-123',
      },
    }),
  },
  wsForNode
)

const websocket = new WebSocketLink(wsClient)

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)

    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  websocket,
  http
)

export const client = new ApolloClient({ link, cache: new InMemoryCache() });
