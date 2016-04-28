import React, { Component } from 'react'
import MapComponent from '../components/Map/Map.js'

export default class MapContainer extends Component {
  render() {
    console.log('rendering the map container')
    return(
      <MapComponent />
    )
  }
}
