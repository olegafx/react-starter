import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'babel-polyfill';
import 'whatwg-fetch';

import Root from './containers/Root';

const renderApp = () => {
  render(
    <AppContainer>
      <Root/>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextApp = require('./containers/Root').default;

    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
