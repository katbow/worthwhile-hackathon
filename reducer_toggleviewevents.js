import { TOGGLE_VIEW_EVENTS } from '../actions/toggleviewevents.js'

export default (state = 'list', action) => {
  switch (action.type) {
  case TOGGLE_VIEW_EVENTS:
    return state === 'list' ? 'map' : 'list' 
  default:
    return state
  }
}
