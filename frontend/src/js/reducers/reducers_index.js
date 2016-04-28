import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import eventsView from './reducer_eventsview.js'

const rootReducer = combineReducers({
  eventsView,
  routing: routerReducer
})

export default rootReducer
