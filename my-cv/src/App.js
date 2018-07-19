import React, { Component } from 'react'
import { Router } from '@reach/router'
import { Container, Row, Col } from 'reactstrap'
import Background from './components/Background.js'
import EnterButton4 from './components/EnterButton4.js'
import './App.css'
import SocialLogos from './components/SocialLogos.js'

import Curriculum from './components/Curriculum.js'
import HomePage from './components/HomePage.js';
import ReturnButton from './components/ReturnButton.js';


class App extends Component {
  render () {
    return (
      <div>
      <div className="App">
      
      <Router>
        <Curriculum path="/Curriculum" />
        <HomePage path ='/' />
        <ReturnButton path='/' />
      </Router>
      </div>

      </div>
    )
  }
}

export default App
