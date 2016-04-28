import React, {Component} from 'react'
import { Nav, NavItem } from 'react-bootstrap'

export default class ToggleViewEvents extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <Nav 
          bsStyle='tabs' 
          activeKey={this.props.eventsView}
          onSelect={this.props.toggleviewevents.bind(eventKey)}>
          <NavItem eventKey={'list'}>List</NavItem>
          <NavItem eventKey={'map'}>Map</NavItem>
        </Nav>
        {this.props.eventsView === 'list' ? <h1>List</h1> : <h1>Map</h1>} 
      </div>
    )
  }
}
