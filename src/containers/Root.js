import React from 'react'
import {hot} from 'react-hot-loader'

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'

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
  <BrowserRouter>
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

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/block" component={BlockExample} />
        <Route path="/text" component={TextExample} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default hot(module)(Root)
