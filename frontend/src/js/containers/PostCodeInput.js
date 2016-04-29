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
      <form
        onSubmit={this.props.centreMapFunc}
        style={{margin: '2vh 0 0 7.5%'}}>
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
