import React, {Component} from 'react'
import ReactDOM from 'react-dom'
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
      <div ref='mapCanvas' style={mapStyle}></div>
    )
  }
}

const mapStyle = {
  margin: '0 auto',
  height: '350px',
  width: '1200px',
}

const eventStyle = {
  width: '50px',
  height: '50px'
}

const initialize = (props, DOMnode) => {
  let bounds = new google.maps.LatLngBounds()
  const mapOptions = {
    center: {lat: props.centreMap.lat, lng: props.centreMap.lng},
    zoom: 14
  }
  // Display a map on the page
  let map = new google.maps.Map(DOMnode, mapOptions)
  map.setTilt(45)
  const markers = props.eventList.map(event => {
    return event.latLng
  })
  const infoWindowContent = props.eventList.map(event => {
    return (
      `<div style=${eventStyle}>
        <h3>${event.venue}</h3>
        <p>${event.title}</p>
      </div>`
    )
  })

  // Display multiple markers on a map
  let infoWindow = new google.maps.InfoWindow()

  // Loop through our array of markers & place each one on the map
  markers.forEach((coordinates, i) => {
    let position = new google.maps.LatLng(coordinates.lat, coordinates.lng)
    bounds.extend(position)
    let marker = new google.maps.Marker({
      position,
      map,
      title: props.eventList[i].title
    })

    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', ((marker, i) => {
      return () => {
        infoWindow.setContent(infoWindowContent[i])
        infoWindow.open(map, marker)
      }
    })(marker, i))

    // Automatically center the map fitting all markers on the screen
    // map.fitBounds(bounds)
  })

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  // const boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
  //   this.setZoom(13)
  //   google.maps.event.removeListener(boundsListener)
  // })
}
