import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import eventsView from './reducer_eventsview.js'
import eventList from './reducer_eventList.js'
import centreMap from './reducer_centreMap.js'

const rootReducer = combineReducers({
  eventsView,
  eventList,
  centreMap,
  routing: routerReducer,
})

export default rootReducer
