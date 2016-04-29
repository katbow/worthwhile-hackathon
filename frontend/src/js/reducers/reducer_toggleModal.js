import { TOGGLE_MODAL } from '../actions/index.js'

export default (state = {isOpen: false}, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {isOpen: !state.isOpen}
    default:
      return state
  }
}
