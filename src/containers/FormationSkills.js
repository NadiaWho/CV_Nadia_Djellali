import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './FormationSkills.css'

import Formations from '../components/Formations'
import SkillsLogos from '../components/SkillsLogos'

const FormationSkills = () => {
  return (
    <Grid>
      <Row>
        <Col>
          <div className='formation-skills'>
            <Formations />
            <SkillsLogos />
          </div>
        </Col>
      </Row>
    </Grid>
  )
}

export default FormationSkills
