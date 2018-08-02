import React from 'react'
import { Link } from '@reach/router'

import './EnterButton4.css'

class EnterButton4 extends React.Component {
  render () {
    return (
      <div className="sign">
        <Link to='/Curriculum'>
        <div className="neon-blue">V<span className="sizzle">oir</span> mo<span className="sizzle">n</span></div>
        <div className="neon-blue"><span className="neon-white">C</span><span className="point">.</span><span className="neon-white" id="blink">V</span></div>
        </Link>
      </div>
    )
  }
}

export default EnterButton4