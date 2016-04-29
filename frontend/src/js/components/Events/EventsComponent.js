import React, {Component} from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import List from '../../containers/List.js'
import Map from '../../containers/Map.js'
import EventModal from '../../containers/EventModal.js'

export default class ToggleViewEvents extends Component {
  render () {
    return (
      <div style={viewEventsStyle}>
        <Nav
          bsStyle='tabs'
          activeKey={this.props.eventsView}
          onSelect={this.props.toggleviewevents}>
          <NavItem eventKey={'list'} style={navItemStyle}>List</NavItem>
          <NavItem eventKey={'map'}>Map</NavItem>
        </Nav>

        {this.props.eventsView === 'list' ? <List /> : <Map />}
        <EventModal />
      </div>
    )
  }
}

const viewEventsStyle = {
  width: '100%',
  margin: '0 auto'
}

const navItemStyle = {
  marginLeft: '8vw'
}
