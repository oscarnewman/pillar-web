import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import '../resources/styles/ghost.css'
import Head from '../components/util/Head'
import { useGA } from '../hooks/useGA'
import '../resources/styles/nprogress.css'
import '../resources/styles/tailwind.css'
import '../resources/styles/theme.css'
import { Providers } from '../components/Providers'
import { DeferredGlobalLoads } from '../components/DeferredGlobalLoads'
import Sentry from '@sentry/browser'

Sentry.init({
  dsn:
    'https://24d17fab417145bb8c033543d82df1c8@o383229.ingest.sentry.io/5213494',
})

function BaseApp(props) {
  const router = useRouter()

  useEffect(() => {
    nProgress.configure({
      showSpinner: false,
    })

    router.events.on('routeChangeStart', nProgress.start)
    router.events.on('routeChangeComplete', nProgress.done)
    router.events.on('routeChangeError', () => nProgress.done(true))
  }, [])

  useGA('UA-148813695-2')

  const { Component, pageProps } = props
  return (
    <>
      <Providers>
        <Head></Head>
        <Component {...pageProps} />
        <DeferredGlobalLoads />
      </Providers>
    </>
  )
}
export default BaseApp
