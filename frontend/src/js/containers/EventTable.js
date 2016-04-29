import React, {Component} from 'react'
import { Modal } from 'react-bootstrap'
import EventTableComponent from '../components/EventTable/EventTable.js'
import { connect } from 'react-redux'

const actionCreators = { }
class EventTable extends Component {
  render () {
    return (
      <EventTableComponent {...this.props} />
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, actionCreators)(EventTable)
