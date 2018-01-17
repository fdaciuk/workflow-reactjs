'use strict'

import React from 'react'
import { render } from 'react-dom'
import App from './app'

const renderApp = (NextApp) => {
  render(
    <NextApp />,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)
