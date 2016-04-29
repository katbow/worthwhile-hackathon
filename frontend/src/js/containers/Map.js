import React, { Component } from 'react'
import {connect} from 'react-redux'
import MapComponent from '../components/Map/Map.js'

import {toggleModal, changeCurrentEvent} from '../actions'

const actionCreators = {
  toggleModal,
  changeCurrentEvent
}

class MapContainer extends Component {
  render() {
    console.log('rendering the map container')
    return(
      <MapComponent {...this.props} />
    )
  }
}

const mapStateToProps = state => ({...state})
export default connect(mapStateToProps, actionCreators)(MapContainer)
