import React, { Component } from 'react';

import styles from '../components/TextBlockExample/styles.css';

class TextBlockExample extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.getData();
  }

  async getData () {
    const rawData = await fetch('http://headers.jsontest.com/');
    const data = await rawData.json();

    console.log('data', data);
  }

  render () {
    return (
      <div className={styles.blockFlex}>
        <span className={styles.text}>text block example</span>
      </div>
    );
  }
}

React.render(<TextBlockExample/>, document.getElementById('content'));