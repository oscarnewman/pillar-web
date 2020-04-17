import ReactGA from 'react-ga'

const IS_BROWSER = typeof window !== 'undefined'
const log = console.log

export const dev = {
  init(code) {
    log(`Analytics init triggered for ${code}`)
  },

  pageview() {
    log(`Pageview triggered for ${window.location.pathname}`)
  },

  event(category = '', action = '') {
    log(`Event for category ${category} and action ${action} triggered`)
  },

  exception(description = '', fatal = false) {
    log(
      `${
        fatal ? 'Fatal exception' : 'Exception'
      } with description ${description}`,
    )
  },
}

export const prod = {
  init(code) {
    if (IS_BROWSER && !window['GA_INITIALIZED'] && code) {
      ReactGA.initialize(code)
    }
  },

  pageview() {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  },

  event(category = '', action = '') {
    if (category && action) {
      ReactGA.event({ category, action })
    }
  },

  exception(description = '', fatal = false) {
    if (description) {
      ReactGA.exception({ description, fatal })
    }
  },
}
