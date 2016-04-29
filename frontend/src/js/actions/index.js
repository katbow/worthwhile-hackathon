import {convertAddressToLatLongObj} from '../helpers/helpers_index.js'
import ReactDOM from 'react-dom'

export const TOGGLE_VIEW_EVENTS = 'TOGGLE_VIEW_EVENTS'
export const CENTRE_MAP = 'CENTRE_MAP'
export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const CHANGE_CURRENT_EVENT = 'CHANGE_CURRENT_EVENT'

export const toggleviewevents = (eventKey) => {
  return {
    type: TOGGLE_VIEW_EVENTS,
    payload: eventKey
  }
}

export const centreMapFunc = (e) => {
  e.preventDefault()
  // const postcode = ReactDOM.findDOMNode(this.refs.inputPostCode).value
  const postcode = document.getElementById('inputPostCode').value
  if (postcode.length > 5 && postcode.indexOf(' ') > -1) {
    return convertAddressToLatLongObj(postcode)
    .then(latLng => {
      return {type: CENTRE_MAP, payload: latLng}
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL
  }
}

export const changeCurrentEvent = (event) => {
  return {
    type: CHANGE_CURRENT_EVENT,
    payload: event
  }
}
