import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='Header'>
        <h1>Kharoh Family Science Projects</h1>
        <a href='https://discord.gg/AUTXwEA'><img src={require('./../assets/favicon.png')} /></a>
      </div>
    )
  }
}

export default Header
