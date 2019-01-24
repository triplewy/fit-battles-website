import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Vote from './Vote'
import './Vote.css'

class VoteStartPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start: false
    }
  }


  render() {
    if (Cookies.get('submitted')) {
      return (
        <div className='Vote section'>
          <Jumbotron>
            <h1>You've voted!</h1>
            <p>Check the leaderboard and come back to vote again in the next round</p>
          </Jumbotron>
        </div>
      )
    } else if (this.state.start) {
      return (
        <Vote />
      )
    } else {
      return (
        <div className='Vote section'>
          <Jumbotron>
            <h1>Fit Battles Voting</h1>
            <p>Vote on fits by clicking on either image</p>
            <p>When you've reached the end or are done voting, hit the submit button at the bottom</p>
            <p>Your votes will only save upon pressing the submit button</p>
            <p>After submitting, you will be unable to vote until the next round</p>
          </Jumbotron>
          <button className='getStarted' onClick={() => this.setState({ start: true })}>Get Started</button>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state.vote
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteStartPage);
