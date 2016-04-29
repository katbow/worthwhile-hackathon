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
          style={{backgroundImage: 'url("https://cloud.githubusercontent.com/assets/15983736/14917588/cb3868ae-0e17-11e6-8b10-1855de7f4616.JPG"'}}>
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
