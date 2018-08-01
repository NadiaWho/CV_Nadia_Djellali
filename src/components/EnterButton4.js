import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from '@reach/router'

import './EnterButton4.css'

class EnterButton4 extends React.Component {
  render () {
    return (
      <Col xs={8} md={12} lg={12}>
      <div class="sign">
        <Link to='/Curriculum'>
        <div class="neon-blue">V<span class="sizzle">oir</span> mo<span class="sizzle">n</span></div>
        <div class="neon-blue"><span class="neon-white">C</span><span class="point">.</span><span class="neon-white" id="blink">V</span></div>
        </Link>
      </div>
      </Col>
    )
  }
}

export default EnterButton4