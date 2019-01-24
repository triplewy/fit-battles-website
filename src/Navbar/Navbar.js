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
      toggleNavigation: false
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
                  <li className='active'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/vote'>Vote</Link>
                  </li>
                  <li>
                    <Link to='/leaderboard'>Leaderboard</Link>
                  </li>
                  <li>
                    <Link to='/upload'>Upload</Link>
                  </li>
                </ul>
              </div>
              :
              <ul>
                <li className='active'>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/vote'>Vote</Link>
                </li>
                <li>
                  <Link to='/leaderboard'>Leaderboard</Link>
                </li>
                <li>
                  <Link to='/upload'>Upload</Link>
                </li>
              </ul>
            }
          </div>
          <div>
            <img className='logo' src={logo} />
          </div>
          <div>

          </div>
          {/* <h1>Fit Battles</h1> */}
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
