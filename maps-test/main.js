jQuery(function ($) {
  // Asynchronously Load the map API
  var script = document.createElement('script')
  script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize'
  document.body.appendChild(script)
})

function initialize () {
  var map
  var bounds = new google.maps.LatLngBounds()
  var mapOptions = {
    mapTypeId: 'roadmap'
  }

  // Display a map on the page
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions)
  map.setTilt(45)

  // Multiple Markers
  var markers = [
    ['BirkBeck, University of London', 51.521746, -0.130588],
    ['West London College', 51.491393, -0.214158],
    ['Imperial College London', 51.498780, -0.174909],
    ['Kingston University', 51.403917, -0.303669],
    ['London School of Economics', 51.514371, -0.117334],
    ['University College London Union', 51.525604, -0.133288],
    ['University of East London', 51.507833, 0.063925],
    ['Royal Holloway, University of London', 51.425716, -0.562934],
    ['The University of West London', 51.506710, -0.303147]
  ]

  // Info Window Content
  var infoWindowContent = [
    ['<div class="info_content">' +
    '<h3>BirkBeck</h3>' +
    '<p>Worthwhile Hackathon</p>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>WCL (3 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/ealing-hammersmith-and-west-london-college-">Events at WCL</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>Imperial College London (7 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/imperial-college-london">Events at Imperial College London</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>Kingston University (10 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/kingston-university">Events at Kingston University</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>London School of Economics (4 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/london-school-of-economics">Events at London School of Economics</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>University College London (5 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/university-college-london-union">Events at University College London Union</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>University of East London (1 Event)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/university-of-east-london">Events at University of East London</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>Royal Holloway, University of London (4 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/royal-holloway-university-of-london">Events at Royal Holloway, University of London</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>The University of West London (13 Events)</h3>' +
    '<a href="https://www.studentvolunteeringweek.org/whats-on/the-university-of-west-london-">Events at The University of West London</a>' + '</div>']
  ]

  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(), marker, i

  // Loop through our array of markers & place each one on the map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2])
    bounds.extend(position)
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0]
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
  }

  // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
    this.setZoom(14)
    google.maps.event.removeListener(boundsListener)
  })
}
