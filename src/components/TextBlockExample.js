import React, { Component } from 'react';

import styles from '../css/TextBlockExample.css';

export default class TextBlockExample extends Component {
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
