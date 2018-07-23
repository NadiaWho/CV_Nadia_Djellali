import React, { Component } from 'react'
import { Router } from '@reach/router'
import './App.css'

import Curriculum from './components/Curriculum.js'
import HomePage from './components/HomePage.js'
// import ContactFormular from './components/ContactFormular.js'
import ContactFormular from './components/ContactFormular.js'
import Footer from './components/Footer.js';

class App extends Component {
  render () {
    return (
      <div className="App">
      
      <Router>
        <Curriculum path="/Curriculum" />
        <HomePage path="/" />
        <ContactFormular path ='/ContactFormular' />
      </Router>
        <Footer />
      </div>
    )
  }
}

export default App
