import { TOGGLE_VIEW_EVENTS } from '../actions/index.js'

export default (state = 'list', action) => {
  switch (action.type) {
  case TOGGLE_VIEW_EVENTS:
    return action.payload
  default:
    return state
  }
}
