import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addVote } from '../Vote/Vote.operations'
import './Battle.css'

class Battle extends PureComponent {
  constructor(props) {
    super(props)

  }


  render() {
    var post1 = this.props.battles[this.props.currentBattle][0]
    var post2 = this.props.battles[this.props.currentBattle][1]
    return (
      <div className='battle'>
        <div className='post'>
          <p>{`u/${post1.username}`}</p>
          <img onClick={() => this.props.handleVote(post1.postId)} src={post1.imageUrl} />
        </div>
        <div className='post'>
          <p>{`u/${post2.username}`}</p>
          <img onClick={() => this.props.handleVote(post2.postId)} src={post2.imageUrl}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.vote
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleVote: (vote) => dispatch(addVote(vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
