import React, { Component } from 'react';

import TestPage from './pages/test';

export default class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <TestPage/>
    );
  }
}
