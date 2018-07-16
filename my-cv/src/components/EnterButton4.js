import React from 'react'
import { Link } from '@reach/router'

import './EnterButton4.css'

class EnterButton4 extends React.Component {
  render () {
    return (
      <div class="sign">
        <Link to='/Curriculum'>
        <div class="neon-blue">V<span class="sizzle">oir</span> mo<span class="sizzle">n</span></div>
        <div class="neon-blue"><span class="neon-white">C</span><span class="point">.</span><span class="neon-white" id="blink">V</span></div>
        </Link>
      </div>
    )
  }
}

export default EnterButton4