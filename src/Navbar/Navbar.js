import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../Icons/logo.png'
import navigationIcon from '../Icons/navigation-icon.png'
import './Navbar.css'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleNavigation: false,
      selected: 0
    }
  }

  render() {
    const isMobile = window.innerWidth < 750
    return (
      <div className='Navbar'>
        <div className='navbarContent'>
          <div>
            {isMobile ?
              <div className='mobileNavbarLeft'>
                <button onClick={() => this.setState({ toggleNavigation: !this.state.toggleNavigation })}>
                  <img className='navigationIcon' src={navigationIcon} />
                </button>
                <ul className='stackNavigation' style={{maxWidth: this.state.toggleNavigation ? '400px' : 0}}>
                  <li className={ this.state.selected === 0 ? 'active' : '' }>
                    <Link to='/' onClick={() => this.setState({ toggleNavigation: !this.state.toggleNavigation, selected: 0 })}>Home</Link>
                  </li>
                  <li className={ this.state.selected === 1 ? 'active' : '' }>
                    <Link to='/vote' onClick={() => this.setState({ toggleNavigation: !this.state.toggleNavigation, selected: 1 })}>Vote</Link>
                  </li>
                  <li className={ this.state.selected === 2 ? 'active' : '' }>
                    <Link to='/leaderboard' onClick={() => this.setState({ toggleNavigation: !this.state.toggleNavigation, selected: 2 })}>Leaderboard</Link>
                  </li>
                  <li className={ this.state.selected === 3 ? 'active' : '' }>
                    <Link to='/upload' onClick={() => this.setState({ toggleNavigation: !this.state.toggleNavigation, selected: 3 })}>Upload</Link>
                  </li>
                </ul>
              </div>
              :
              <ul>
                <li className={ this.state.selected === 0 ? 'active' : '' }>
                  <Link to='/' onClick={() => this.setState({ selected: 0 })}>Home</Link>
                </li>
                <li className={ this.state.selected === 1 ? 'active' : '' }>
                  <Link to='/vote' onClick={() => this.setState({ selected: 1 })}>Vote</Link>
                </li>
                <li className={ this.state.selected === 2 ? 'active' : '' }>
                  <Link to='/leaderboard' onClick={() => this.setState({ selected: 2 })}>Leaderboard</Link>
                </li>
                <li className={ this.state.selected === 3 ? 'active' : '' }>
                  <Link to='/upload' onClick={() => this.setState({ selected: 3 })}>Upload</Link>
                </li>
              </ul>
            }
          </div>
          <div>
            <img className='logo' src={logo} />
          </div>
          <div>

          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
