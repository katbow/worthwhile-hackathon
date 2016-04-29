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
  render () {
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
