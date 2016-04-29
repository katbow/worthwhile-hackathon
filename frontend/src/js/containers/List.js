import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
  li: {
    listStyleType: 'none',
    color: 'black',
    fontSize: '1.7em',
    textDecoration: 'none',
    padding: '2em',
    margin: '9px',
    border: '3px solid green',
    borderRadius: '10px'
  },
  ul: {
    padding: '2em',
    borderRadius: '10px'
  }
} 

class List extends Component {
  render() {
    console.log(this.props.eventList[0])
    return(
      <ul style={styles.ul}>
        {this.props.eventList.map(event => {
          return (
            <li style={styles.li}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><span>Venue: </span>{event.venue},<div style={{width: '20px'}}></div> Postcode: {event.postcode}</p>
              <div>Current Attendees: {event.attendees}</div>
            </li>
          )}
        )} 
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    eventList: state.eventList
  }
}

export default connect(mapStateToProps)(List) 
