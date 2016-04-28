import React, {Component} from 'react'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class ToggleViewEvents extends Component {
  handleSelect (e, key) {
    e.preventDefault()
    console.log('selected the event with key', key)
  }
  render () {
    return (
      <Nav bsStyle='tabs' activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1}>List</NavItem>
        <NavItem eventKey={2} title='Item'>Map</NavItem>
        <NavDropdown eventKey={4} title='Dropdown' id='nav-dropdown'>
          <MenuItem eventKey='4.1'>Action</MenuItem>
          <MenuItem eventKey='4.2'>Another action</MenuItem>
          <MenuItem eventKey='4.3'>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey='4.4'>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    )
  }
}
