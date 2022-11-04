import { ApolloClient, InMemoryCache } from '@apollo/client'

import { API_URI } from '@/config'

const client = new ApolloClient({
  uri: API_URI,
  cache: new InMemoryCache()
})

export default client