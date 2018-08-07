import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './BioContent.css'

const BioContent = ({children}) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="bio-content">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default BioContent
