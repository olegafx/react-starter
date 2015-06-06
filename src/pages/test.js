import React, { Component } from 'react';

import BlockExample from '../components/BlockExample/BlockExample';
import TextBlockExample from '../components/TextBlockExample/TextBlockExample';

export default class TestPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <BlockExample/>
        <TextBlockExample/>
      </div>
    );
  }
}
