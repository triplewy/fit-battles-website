import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='Home section'>
        <Jumbotron>
          <h1>Welcome to r/streetwear's Fit Battles</h1>
          <p>A website dedicated for fit battles</p>
        </Jumbotron>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
