import React, { Component } from 'react'
import { Router } from '@reach/router'

import Background from './components/Background.js'
import EnterButton4 from './components/EnterButton4.js'
import './App.css'
import SocialLogos from './components/SocialLogos.js'

import Curriculum from './components/Curriculum.js'
import HomePage from './components/HomePage.js';


class App extends Component {
  render () {
    return (
      <div>
      <div className="App">
      
      <Router>
        <Curriculum path="/Curriculum" />
        <HomePage path ='/' />
      </Router>
      </div>

      </div>
    )
  }
}

export default App
