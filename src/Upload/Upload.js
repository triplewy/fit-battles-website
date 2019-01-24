import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upload } from './Upload.operations'
import imageExists from 'image-exists'
import './Upload.css'

class Upload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      imageUrl: '',
      validImage: false
    }

    this.checkImage = this.checkImage.bind(this)
  }

  checkImage(e) {
    e.persist()
    imageExists(e.target.value, (exists) => {
      if (exists) {
        this.setState({ validImage: true, imageUrl: e.target.value })
      }
      else {
        this.setState({ imageUrl: e.target.value })
      }
    })
  }

  render() {
    if (this.props.success) {
      return (
        <div className='Upload section'>
          <h1>Upload</h1>
          <p>Successfully uploaded <span style={{color: 'green'}}>✓</span></p>
        </div>
      )
    } else {
      return (
        <div className='Upload section'>
          <h1>Upload</h1>
          <input placeholder="Type your reddit username here..." value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}/>
          <input placeholder="Paste image url here..." value={this.state.imageUrl} onChange={this.checkImage}/>
          <img src={this.state.imageUrl} />
          <button
            style={{color: this.state.imageUrl && this.state.username && this.state.validImage ? '#739aff' : '#ccc'}}
            disabled={!(this.state.imageUrl || this.state.username || this.state.validImage)}
            onClick={() => this.props.handleUpload(this.state.username, this.state.imageUrl)}
          >
            Submit
          </button>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state.upload
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpload: (username, imageUrl) => dispatch(upload(username, imageUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
