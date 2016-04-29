import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import eventsView from './reducer_eventsview.js'
import eventList from './reducer_eventList.js'
import centreMap from './reducer_centreMap.js'
import toggleModal from './reducer_toggleModal.js'
import currentEvent from './reducer_currentEvent.js'
import events from './reducer_events.js'

const rootReducer = combineReducers({
  eventsView,
  eventList,
  centreMap,
  toggleModal,
  currentEvent,
  events,
  routing: routerReducer,
})

export default rootReducer
