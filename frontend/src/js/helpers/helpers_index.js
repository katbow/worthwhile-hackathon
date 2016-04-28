import axios from 'axios'
const googleMapsGeoCodeURL = 'http://maps.googleapis.com/maps/api/geocode/json?'

export const convertAddressToLatLongObj = (address) => {
  if (typeof address === 'string') {
    const geocodeRequestURL = `${googleMapsGeoCodeURL}address=${address}`
    return axios.get(geocodeRequestURL)
    .then(result => {
      console.log('result', result.data.results[0].geometry.location)
      return Promise.resolve(result.data.results[0].geometry.location)
    })
  }
}
