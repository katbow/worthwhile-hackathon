import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userDetails from './reducer_userDetails.js'

const rootReducer = combineReducers({
  userDetails,
  routing: routerReducer
})

export default rootReducer
