import 'babel-polyfill'
import 'whatwg-fetch'

import React from 'react'
import {render} from 'react-dom'

import Root from './containers/Root'

const renderApp = () => {
  render(<Root />, document.querySelector('.js-app'))
}

const tryToRenderApp = () => {
  const loadedStates = ['complete', 'loaded', 'interactive']

  if (loadedStates.includes(document.readyState) && document.body) {
    renderApp()
  } else {
    window.addEventListener('DOMContentLoaded', renderApp, false)
  }
}

tryToRenderApp()
