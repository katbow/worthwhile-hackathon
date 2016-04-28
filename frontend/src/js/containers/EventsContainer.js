import React, {Component} from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import EventsComponent from '../components/List/EventsComponent.js'
import { connect } from 'react-redux'
import { toggleviewevents } from '../actions/index.js'

class ToggleViewEvents extends Component {
  render () {
    console.log(toggleviewevents)
    return (
      <EventsComponent {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, { toggleviewevents })(ToggleViewEvents)
