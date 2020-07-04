import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: process.env.GATSBY_API_ENDPOINT,
  fetch,
  headers: {
    'x-api-key': process.env.GATSBY_API_KEY
  }
});
