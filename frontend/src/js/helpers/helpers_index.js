import axios from 'axios'
const googleMapsGeoCodeURL = 'http://maps.googleapis.com/maps/api/geocode/json?'

export const convertAddressToLatLongObj = (address) => {
  const geocodeRequestURL = `${googleMapsGeoCodeURL}address=${address}`
  return axios.get(geocodeRequestURL)
  .then(result => {
    return Promise.resolve(result.data.results[0].geometry.location)
  })
  .catch(err => console.log(err))
}
