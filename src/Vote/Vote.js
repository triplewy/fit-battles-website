import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import { getBattles, submitVotes, addVote } from './Vote.operations'
import Loader from 'react-loader-spinner'
import Battle from '../Battle/Battle'
import './Vote.css'

class Vote extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.fetchBattles()
  }

  render() {
    if (this.props.loading) {
      return (
        <div className='Vote'>
          <h1>Vote</h1>
          <Loader
            type="Puff"
            color="blue"
            height="50"
            width="50"
          />
        </div>
      )
    } else {
      if (this.props.currentBattle >= this.props.battles.length) {
        return (
          <div className='Vote section'>
            <h1>You have finished voting!</h1>
            <p>Please submit your votes</p>
            <button className='submitVotes' onClick={() => this.props.handleSubmit(this.props.votes)}>Submit Votes</button>
          </div>
        )
      } else {
        return (
          <div className='Vote'>
            <div className='section'>
              <h1>{`Battle ${this.props.currentBattle + 1}/${this.props.battles.length}`}</h1>
              <Battle />
            </div>
            <button className='submitVotes' onClick={() => this.props.handleSubmit(this.props.votes)}>Submit Votes</button>
          </div>
        )
      }
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
    fetchBattles: () => dispatch(getBattles()),
    handleVote: (vote) => dispatch(addVote(vote)),
    handleSubmit: (votes) => dispatch(submitVotes(votes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote);
