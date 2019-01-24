import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Vote.css'

class Vote extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Vote'>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
