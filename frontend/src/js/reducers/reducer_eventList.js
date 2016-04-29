
export default (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

const initialState = [
  {
    title: 'Worthwhile Hackathon',
    venue: 'BirkBeck',
    time: '12.00 on 24/5/2016',
    postcode: 'E15 1NF',
    latLng: {lat: 51.521746, lng: -0.130588},
    description: 'sdaeracdghrkjhsdfjkaldsf ',
    url: 'https://www.studentvolunteeringweek.org/whats-on/ealing-hammersmith-and-west-london-college',
    attendees: 22
  },
  {
    title: 'Worthwhile Hackathon',
    venue: 'West London College',
    time: '12.00 on 24/5/2016',
    postcode: 'W1U 4DJ',
    latLng: {lat: 51.491393, lng: -0.214158},
    description: 'sdaeracdghrkjhsdfjkaldsf ',
    url: 'https://www.studentvolunteeringweek.org/whats-on/ealing-hammersmith-and-west-london-college',
    attendees: 22
  },
  {
    title: 'Worthwhile Hackathon',
    venue: 'Imperial College London',
    time: '12.00 on 24/5/2016',
    postcode: 'SW7 2AZ',
    latLng: {lat: 51.498780, lng: -0.174909},
    description: 'sdaeracdghrkjhsdfjkaldsf ',
    url: 'https://www.studentvolunteeringweek.org/whats-on/ealing-hammersmith-and-west-london-college',
    attendees: 22
  },
  {
    title: 'Worthwhile Hackathon',
    venue: 'Kingston University',
    time: '12.00 on 24/5/2016',
    postcode: 'KT1 2EE',
    latLng: {lat: 51.403917, lng: -0.303669},
    description: 'sdaeracdghrkjhsdfjkaldsf ',
    url: 'https://www.studentvolunteeringweek.org/whats-on/ealing-hammersmith-and-west-london-college',
    attendees: 22
  },
  {
    title: 'Worthwhile Hackathon',
    venue: 'London School of Economics',
    time: '12.00 on 24/5/2016',
    postcode: 'WC2A 2AE',
    latLng: {lat: 51.514371, lng: -0.117334},
    description: 'sdaeracdghrkjhsdfjkaldsf ',
    url: 'https://www.studentvolunteeringweek.org/whats-on/ealing-hammersmith-and-west-london-college',
    attendees: 22
  },
]

/* ['University College London Union', 51.525604, -0.133288],
['University of East London', 51.507833, 0.063925],
['Royal Holloway, University of London', 51.425716, -0.562934],
['The University of West London', 51.506710, -0.303147] */
