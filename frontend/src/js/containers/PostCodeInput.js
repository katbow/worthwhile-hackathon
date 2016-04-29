import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import {centreMapFunc} from '../actions'

const actionCreators = {
  centreMapFunc,
}

class PostCodeInput extends Component {
  render () {
    return (
      <form onSubmit={this.props.centreMapFunc}>
        <input
          ref='inputPostCode'
          id='inputPostCode'
          type='text'
          placeholder='postcode, e.g. E2 0SY...'
        />
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps, actionCreators)(PostCodeInput)