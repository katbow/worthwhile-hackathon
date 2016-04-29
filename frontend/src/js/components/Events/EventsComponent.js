import React, {Component} from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import List from '../../containers/List.js'
import Map from '../../containers/Map.js'
import PostCodeInput from '../../containers/PostCodeInput.js'

export default class ToggleViewEvents extends Component {
  render () {
    return (
      <div>
        <Nav
          bsStyle='tabs'
          activeKey={this.props.eventsView}
          onSelect={this.props.toggleviewevents}>
          <NavItem eventKey={'list'}>List</NavItem>
          <NavItem eventKey={'map'}>Map</NavItem>
          <PostCodeInput />
        </Nav>
        {this.props.eventsView === 'list' ? <List /> : <Map />}
      </div>
    )
  }
}
