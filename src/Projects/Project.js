import React, { Component } from 'react'

class Project extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <a href={this.props.href} style={this.props.style}>
        <div className='Project'>
          <h2>{this.props.title}</h2>
          {this.props.image ? <img src={require(`./../assets/projectsImages/${this.props.image}`)} alt='Map Generator project image' /> : null}
        </div>
      </a>
    )
  }
}

export default Project
