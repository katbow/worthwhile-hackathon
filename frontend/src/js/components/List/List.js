import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
  render () {
    return (
      <Grid className='home'>
        <Row>
          <Col xs={12}>
            <div className='image-container'>
              <img src='img/rhino.png' />
            </div>
            <p>List page</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

