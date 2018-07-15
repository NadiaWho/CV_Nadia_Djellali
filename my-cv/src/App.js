import React, { Component } from 'react'

import Background from './components/Background.js'
import EnterButton4 from './components/EnterButton4.js'
import './App.css'
import SocialLogos from './components/SocialLogos.js';

class App extends Component {
  render () {
    return (
      <div className="App">
        <SocialLogos />
        <Background />
        <EnterButton4 />
      </div>
    )
  }
}

export default App
