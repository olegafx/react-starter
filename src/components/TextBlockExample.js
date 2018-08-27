import React, {Component} from 'react'

import styles from '../css/TextBlockExample.css'

class TextBlockExample extends Component {
  state = {
    text: '',
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
    this.fetchText()
  }

  fetchText = async () => {
    const rawData = await fetch('/')
    const data = await rawData.text()

    const text = data

    this.setState(state => ({
      text,
    }))
  }

  render() {
    const {text} = this.state

    return (
      <div className={styles.blockFlex}>
        <span className={styles.text}>{text}</span>
      </div>
    )
  }
}

export default TextBlockExample
