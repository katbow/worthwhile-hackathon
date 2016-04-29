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
          style={{backgroundImage: 'url("https://cloud.githubusercontent.com/assets/15983736/14917508/4a5f9d10-0e17-11e6-8354-ab7e7520cc88.JPG"'}}>
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
