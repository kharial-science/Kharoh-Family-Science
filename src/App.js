import React, { Component } from 'react'

import Header from './Header/Header'
import Projects from './Projects/Projects'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="App">
        <Header />
        <Projects />
      </div>
    )
  }
}

export default App