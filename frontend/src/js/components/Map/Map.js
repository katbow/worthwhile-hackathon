import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PostCodeInput from '../../containers/PostCodeInput.js'
import {convertAddressToLatLongObj} from '../../helpers/helpers_index.js'

export default class Map extends Component {
  componentDidMount () {
    initialize(this.props, ReactDOM.findDOMNode(this.refs.mapCanvas))
  }
  shouldComponentUpdate (nextProps, nextState) {
    const sameLat = nextProps.centreMap.lat === this.props.centreMap.lat
    const sameLng = nextProps.centreMap.lng === this.props.centreMap.lng
    if (!(sameLat && sameLng)) {
      initialize(nextProps, ReactDOM.findDOMNode(this.refs.mapCanvas))
    }
    return !(sameLat && sameLng)
  }
  render () {
    return (
      <div>
        <PostCodeInput />
        <div ref='mapCanvas' style={mapStyle}></div>
      </div>
    )
  }
}

const mapStyle = {
  margin: '0 auto',
  height: '500px',
  width: '85%',
}

const eventStyle = {
  width: '50px',
  height: '50px'
}

const initialize = (props, DOMnode) => {
  let bounds = new google.maps.LatLngBounds()
  const mapOptions = {
    center: {lat: props.centreMap.lat, lng: props.centreMap.lng},
    zoom: 13
  }
  // Display a map on the page
  let map = new google.maps.Map(DOMnode, mapOptions)
  map.setTilt(45)
  const markers = props.events.map(event => {
    return event.latLng
  })

  // Loop through our array of markers & place each one on the map
  markers.forEach((coordinates, i) => {
    let position = new google.maps.LatLng(coordinates.lat, coordinates.lng)
    bounds.extend(position)
    let marker = new google.maps.Marker({
      position,
      map,
      title: props.events[i].title
    })

    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', () => {
      console.log(props.events[i])
      props.changeCurrentEvent(props.events[i])
      props.toggleModal()
    })

    // Automatically center the map fitting all markers on the screen
    // map.fitBounds(bounds)
  })

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  // const boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
  //   this.setZoom(13)
  //   google.maps.event.removeListener(boundsListener)
  // })
}
