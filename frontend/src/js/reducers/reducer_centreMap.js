import { CENTRE_MAP } from '../actions/index.js'
// import { IGNORE } from '../actions/index.js'

export default (state = {lat: 51.5209966, lng: -0.1278442}, action) => {
  switch (action.type) {
    case CENTRE_MAP:
      return action.payload
    default:
      return state
  }
}
