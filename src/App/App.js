import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Vote from '../Vote/VoteStartPage'
import Leaderboard from '../Leaderboard/Leaderboard'
import Upload from '../Upload/Upload'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className='bodyContent'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/vote' component={Vote} />
              <Route exact path='/leaderboard' component={Leaderboard} />
              <Route exact path='/upload' component={Upload} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
