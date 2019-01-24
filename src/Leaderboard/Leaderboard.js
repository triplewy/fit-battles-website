import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Leaderboard.css'

class Leaderboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Leaderboard'>
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

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
