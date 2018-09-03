import React from 'react'
import {hot} from 'react-hot-loader'
import {Router, Link} from '@reach/router'

import App from './App'

import BlockExample from '../components/BlockExample'
import TextExample from '../components/TextBlockExample'

const NotFound = ({location}) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)

const Root = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/block">Block</Link>
      </li>
      <li>
        <Link to="/text">Text</Link>
      </li>
    </ul>

    <hr />

    <Router>
      <App path="/" />
      <BlockExample path="/block" />
      <TextExample path="/text" />
      <NotFound default />
    </Router>
  </div>
)

export default hot(module)(Root)
