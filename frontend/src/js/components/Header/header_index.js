import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'


export default class Header extends React.Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <Navbar
          expanded={this.state.menuOpen}
          onToggle={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
          className='top-menu'
          fixedTop={true}
          style={{backgroundImage: 'url("http://i.imgur.com/CQbE0tE.jpg"'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img style={{marginTop: '-15px'}} src={this.props.logo.imgUrl}></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}
