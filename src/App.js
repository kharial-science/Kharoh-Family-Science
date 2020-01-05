import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Header from './Header/Header'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Members from './Members/Members'
import Footer from './Footer/Footer'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const backgroundHexagons = []
    for (let i = 0; i < 30; i++) {
      backgroundHexagons.push(
        <img
          key={i}
          src={require(`./assets/hexagons/hexagon${Math.floor(Math.random() * 7)}.svg`)}
          className='backgroundHexagon'
          style={{
            position: 'fixed',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '3vh',
            height: 'auto',
            color: 'white',
            transform: 'translateX(-50%)',
            zIndex: -1,
            animation: `hexagonsAreGons forwards infinite 10s ${i * 0.15}s ease-out`
          }}
        />
      )
    }

    return (
      <div id='App'>
      <Header />
      <Router>
        <Switch>
          <Route
          exact path="/"
          component= {() => <Home />}
          />

          <Route
            exact path='/Projects'
            component={() => <Projects />}
          />

          <Route
          exact path='/Members'
          component={() => <Members />}/>

        </Switch>
      </Router>
      <Footer />
        {backgroundHexagons}
      </div>
    )
  }
}

export default App
