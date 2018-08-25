import React, {Component} from 'react'

import styles from '../css/BlockExample.css'

export default class TextBlockExample extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.blockFlex}>
        <span className={styles.text}>It works!</span>
      </div>
    )
  }
}
