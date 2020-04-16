import App from 'next/app'
import '../resources/styles/tailwind.css'
import '../resources/styles/theme.css'
import '../resources/styles/nprogress.css'
import { useEffect } from 'react'
import nProgress from 'nprogress'
import Router from 'next/router'
import Head from '../components/util/Head'

class BaseApp extends App {
  constructor(props) {
    super(props)

    nProgress.configure({
      showSpinner: false,
    })

    Router.events.on('routeChangeStart', nProgress.start)
    Router.events.on('routeChangeComplete', nProgress.done)
    Router.events.on('routeChangeError', () => nProgress.done(true))
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head></Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default BaseApp
