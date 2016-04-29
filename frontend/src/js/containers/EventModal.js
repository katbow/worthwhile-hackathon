import React, {Component} from 'react'
import { Modal } from 'react-bootstrap'
import EventModalComponent from '../components/EventModal/EventModal.js'
import { connect } from 'react-redux'
import { toggleModal } from '../actions/index.js'

const actionCreators = {
  toggleModalFunc: toggleModal
}
class EventModalContainer extends Component {
  render () {
    return (
      <EventModalComponent {...this.props} />
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, actionCreators)(EventModalContainer)
