import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLeaderboard } from './Leaderboard.operations'
import './Leaderboard.css'

class Leaderboard extends Component {
  constructor(props) {
    super(props)

    this.renderBattles = this.renderBattles.bind(this)
  }

  componentDidMount() {
    this.props.fetchLeaderboard()
  }

  renderBattles() {
    return this.props.battles.map((item, index) => {
      return (
        <li key={index}>
          <div>
            <p>{`${item[0].votes} votes`}</p>
            <p>{`u/${item[0].username}`}</p>
            <img src={item[0].imageUrl} />
          </div>
          <div>
            <p>{`${item[1].votes} votes`}</p>
            <p>{`u/${item[1].username}`}</p>
            <img src={item[1].imageUrl} />
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='Leaderboard section'>
        <h1>Leaderboard</h1>
        <ul>
          {this.renderBattles()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.leaderboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLeaderboard: () => dispatch(getLeaderboard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
