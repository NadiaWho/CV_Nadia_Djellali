import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './ExperienceHobbies.css'

import Experiences from '../components/Experiences'
import Hobbies from '../components/Hobbies'

const ExperienceHobbies = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <div className='experience-hobbies'>
            <Experiences />
            <Hobbies />
          </div>
        </Col>
      </Row>
    </Grid>
  )
}

export default ExperienceHobbies
