import {CHANGE_CURRENT_EVENT} from '../actions/index.js'

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_EVENT:
      return action.payload
    default:
      return state
  }
}
