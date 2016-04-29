import React, { Component } from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import { connect } from 'react-redux'

import { toggleModal, changeCurrentEvent, addAttendee, toggleviewevents, centreMapFunc } from '../actions/index.js'

const actionCreators = {
  toggleModal,
  changeCurrentEvent,
  addAttendee,
  toggleviewevents,
  centreMapFunc
}

const styles = {
  li: {
    listStyleType: 'none',
    color: 'black',
    fontSize: '1.7em',
    textDecoration: 'none',
    padding: '0.5em 2em 2em 2em',
    margin: '9px',
    border: '3px solid #199FD4',
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
      <div>
        <div style={{position: 'fixed', top: '20%', left: '4%'}}>
          <h1>SVW 2016</h1>
          <h4>16 days until SVW!</h4>
          <h4>5 Upcoming Events</h4>
          <h4>252 Total Attendees</h4>
        </div>
        <ul style={styles.ul}>
          {this.props.events.map((event, index) => {
            return (
              <li style={styles.li}>
                <h3 style={{fontSize: '2em'}}><a href={event.url} target='_blank'>{event.title}</a></h3>
                <Row>
                  <Col md={2}><strong>Venue</strong></Col>
                  <Col md={10}>{event.venue}</Col>
                </Row>
                <Row>
                  <Col md={2}><strong>Time</strong></Col>
                  <Col md={5}>{event.time}</Col>
                  <Col md={3}><strong>Attendees</strong></Col>
                  <Col md={2}><em>{event.attendees}</em></Col>
                </Row>
                <Button
                  onClick={() => {
                    this.props.changeCurrentEvent(event)
                    this.props.toggleModal()
                  }}
                >MORE INFO
                </Button>
                <Button onClick={() => {
                    this.props.addAttendee(null, event, index)
                  }}>
                  ATTEND EVENT
                </Button>
              <Button onClick={(e) => {
                  this.props.toggleviewevents('map')
                  this.props.centreMapFunc(e, event.latLng)
                }}>GO TO MAP
              </Button>
            </li>
          )}
        )}
        </ul>
        <div style={{position: 'fixed', top: '20%', right: '1%'}}>
          <h1>Institutions</h1>
          <a href='http://www.london.ac.uk/'><h4>Bangor University (3)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Canterbury College (1)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Canterbury College (1)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Cardiff University (6)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Coleg Sir Gar (3)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>De Montfort Students Union (12)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Exeter College (1)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Hartpury (2)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Imperial College London (7)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Keele University (1)</h4></a>
          <a href='http://www.london.ac.uk/'><h4>Kingston University (10)</h4></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, actionCreators)(List)
