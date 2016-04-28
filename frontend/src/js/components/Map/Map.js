import React, {Component} from 'react'
import {convertAddressToLatLongObj} from '../../helpers/helpers_index.js'

export default class Map extends Component {
  componentDidMount () {
    console.log(this.props, 'propsss in component did mount');
    console.log('function geocode', convertAddressToLatLongObj);
    initialize(this.props)
  }
  render () {
    return (
      <div id='map_canvas' style={mapStyle}></div>
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


const initialize = (props) => {
  var map
  var bounds = new google.maps.LatLngBounds()
  var mapOptions = {
    mapTypeId: 'roadmap'
  }

  // Display a map on the page
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions)
  map.setTilt(45)

  const markers = props.eventList.map(event => {
    const coordinates = convertAddressToLatLongObj(encodeURI(event.postcode))
    console.log('coordinatesss', coordinates)
    return [event.venue, coordinates.lat, coordinates.long]
  })
  console.log(props, 'the props in the infoWindowContent');
  var infoWindowContent = props.eventList.map(event => {
    console.log('event', event)
    return (
      <div style={eventStyle}>
        <h3>{event.venue}</h3>
        <p>{event.title}</p>
      </div>
    )
  })

  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow()

  // Loop through our array of markers & place each one on the map
  markers.forEach((marker, i) => {
    console.log('markers', markers)
    console.log('current marker', marker)
    var position = new google.maps.LatLng(marker[1], marker[2])
    bounds.extend(position)
    marker = new google.maps.Marker({
      position,
      map,
      title: marker[0]
    })

    // Allow each marker to have an info window
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infoWindow.setContent(infoWindowContent[i][0])
        infoWindow.open(map, marker)
      }
    })(marker, i))

    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds)
  })

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
    this.setZoom(14)
    google.maps.event.removeListener(boundsListener)
  })
}
