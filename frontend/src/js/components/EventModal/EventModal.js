import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import EventTable from '../../containers/EventTable.js'

export default React.createClass({
  close () {
    this.props.toggleModalFunc()
  },

  render () {
    return (
      <div>
        <Modal show={this.props.toggleModal.isOpen} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>EVENT INFO</Modal.Title>
          </Modal.Header>
            <EventTable />
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

})
