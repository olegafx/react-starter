import React from 'react'
import {hot} from 'react-hot-loader'

import Match from 'react-router/Match'
import Miss from 'react-router/Miss'
import Link from 'react-router/Link'
import Router from 'react-router/BrowserRouter'

import App from './App'

import BlockExample from '../components/BlockExample'
import TextExample from '../components/TextBlockExample'

const NoMatch = ({location}) => (
  <div>
    <h2>Whoops</h2>
    <p>Sorry but {location.pathname} didn’t match any pages</p>
  </div>
)

const Root = () => (
  <Router>
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

      <Match exactly pattern="/" component={App} />
      <Match pattern="/block" component={BlockExample} />
      <Match pattern="/text" component={TextExample} />

      <Miss component={NoMatch} />
    </div>
  </Router>
)

export default hot(module)(Root)
