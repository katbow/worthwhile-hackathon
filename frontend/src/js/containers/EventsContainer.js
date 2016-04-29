import React, {Component} from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import EventsComponent from '../components/Events/EventsComponent.js'
import { connect } from 'react-redux'
import { toggleviewevents } from '../actions/index.js'

class ToggleViewEvents extends Component {
  render () {
    return (
      <EventsComponent {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, { toggleviewevents })(ToggleViewEvents)
