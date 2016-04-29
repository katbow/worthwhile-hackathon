import React from 'react'
import axios from 'axios'
import Header from './Header/header_index.js'
import Footer from './Footer/footer_index.js'

import '../../scss/style.scss'

const options = {
  headerLogo: {
    imgUrl: 'img/SVW-Logo.png',
    websiteUrl: 'http://www.foundersandcoders.com'
  },
  footerLogo: {
    imgUrl: 'img/FAC-logo.png',
    websiteUrl: 'http://www.foundersandcoders.com'
  }
}

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header
          logo={options.headerLogo}
          fluid
        />
        <div className='header-spacing'></div>
          {this.props.children}
        <Footer logo={options.footerLogo} />
      </div>
    )
  }
}
