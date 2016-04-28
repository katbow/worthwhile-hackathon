export const TOGGLE_VIEW_EVENTS = 'TOGGLE_VIEW_EVENTS'

export const toggleviewevents = (eventKey) => {
  return {
    type: TOGGLE_VIEW_EVENTS,
    payload: eventKey
  }
}
