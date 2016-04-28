import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import eventsView from './reducer_eventsview.js'
import eventList from './reducer_eventList.js'

const rootReducer = combineReducers({
  eventsView,
  eventList,
  routing: routerReducer,
})

export default rootReducer
