import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'

import { toggleModal, changeCurrentEvent } from '../actions/index.js'

const actionCreators = {
  toggleModal,
  changeCurrentEvent
}

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
              <Button
                onClick={() => {
                  this.props.changeCurrentEvent(event)
                  this.props.toggleModal()
                }}
              >See More Info
              </Button>
            </li>
          )}
        )}
      </ul>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, actionCreators)(List)
