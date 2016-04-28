import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import List from './components/List/List.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={List} />
  </Route>
)
