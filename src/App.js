import React, { Component } from 'react'

import Header from './Header/Header'
import Projects from './Projects/Projects'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const backgroundHexagons = []
    for (let i = 0; i< 40; i++) {
      backgroundHexagons.push(
        <div 
          className="backgroundHexagon" 
          style={{
            position: "absolute",
            top: `${Math.random()*100}%`,
            left: `${Math.random()*100}%`,
            backgroundColor: "white",
            width: "10px",
            height: "10px",
            transform: "translateX(-50%)",
            zIndex: -1,
          }}>

        </div>)
    }

    return (
      <div id="App">
        <Header />
        <Projects />
        {backgroundHexagons}
      </div>
    )
  }
}

export default App