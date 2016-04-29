import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = {
  li: {
    listStyleType: 'none',
    color: 'black',
    fontSize: '1.7em',
    textDecoration: 'none',
    padding: '0.5em 2em 2em 2em',
    margin: '9px',
    border: '3px solid green',
    borderRadius: '10px'
  },
  ul: {
    padding: '2em',
    borderRadius: '10px',
    marginRight: '20%',
    marginLeft: '20%'
  }
} 

class List extends Component {
  render() {
    return(
      <ul style={styles.ul}>
        {this.props.eventList.map(event => {
          return (
            <li style={styles.li}>
              <h3 style={{fontSize: '2em'}}><a href={event.url}>{event.title}</a></h3>
              <p style={{fontSize: '1em'}}>{event.description}</p>
              <div>Venue: {event.venue},</div>
              <div style={{float: 'left', marginRight: '10%'}}>Postcode: {event.postcode}</div>
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
