import { useEffect } from 'react'
import Router from 'next/router'
import { dev, prod } from '../lib/analytics'

function isLocal(host) {
  return location.hostname === host
}

function isDev() {
  return process.env.NODE_ENV !== 'production'
}

export function useGA(code: string) {
  useEffect(() => {
    const shouldTrack = !isDev() && !isLocal('localhost')
    const analytics = shouldTrack ? prod : dev

    analytics.init(code)
    analytics.pageview()

    // save possible previously defined callback
    // @ts-ignore
    const previousCallback = Router.onRouteChangeComplete
    Router.events.on('RouteChangeComplete', () => {
      // call previously defined callback if is a function
      if (typeof previousCallback === 'function') {
        previousCallback()
      }
      // log page
      analytics.pageview()
    })
  })
}
