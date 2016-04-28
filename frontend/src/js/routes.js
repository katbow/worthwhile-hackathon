import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import EventsContainer from './containers/EventsContainer.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={EventsContainer} />
  </Route>
)
