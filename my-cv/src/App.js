import React, { Component } from 'react'

import Background from './components/Background.js'
import EnterButton4 from './components/EnterButton4.js'
import './App.css'
import SkillsLogos from './components/SkillsLogos.js';

class App extends Component {
  render () {
    return (
      <div className="App">
        <SkillsLogos />
        <Background />
        <EnterButton4 />
      </div>
    )
  }
}

export default App
