import 'babel-polyfill'
import 'whatwg-fetch'

import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import Root from './containers/Root'

const renderApp = () => {
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.querySelector('.js-app'),
  )

  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      const RootContainer = require('./containers/Root').default

      render(
        <AppContainer>
          <RootContainer />
        </AppContainer>,
        document.querySelector('.js-app'),
      )
    })
  }
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
