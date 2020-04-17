import App from 'next/app'
import '../resources/styles/tailwind.css'
import '../resources/styles/theme.css'
import '../resources/styles/nprogress.css'
import { useEffect } from 'react'
import nProgress from 'nprogress'
import Router, { useRouter } from 'next/router'
import Head from '../components/util/Head'
import { useGA } from '../hooks/useGA'

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
      <Head></Head>
      <Component {...pageProps} />
    </>
  )
}
export default BaseApp
