import { buildAxiosFetch } from '@lifeomic/axios-fetch'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import axios from 'axios'
import { loggedIn, getToken } from './InMemoryAuthClient'

interface SSRAUthCredentials {
  cookie: string
  xsrf: string
}

let authCredentials: SSRAUthCredentials | null = null
export function setAuthCookiesForSsr(credentials: SSRAUthCredentials) {
  authCredentials = credentials
}

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  axios.defaults.withCredentials = true

  return new ApolloClient({
    uri: process.env.GQL_URL,
    fetch: buildAxiosFetch(axios),
    credentials: 'include',
    cache: new InMemoryCache().restore(initialState),
    request: (operation) => {
      operation.setContext({
        headers: {
          ...(!!authCredentials && !!authCredentials.xsrf
            ? {
                Cookie: authCredentials.cookie,
                'x-xsrf-token': authCredentials.xsrf,
              }
            : {}),
        },
      })
    },
  })
}
