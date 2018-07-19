import React from 'react'
import  { Container, Row, Col } from 'reactstrap'
import './BioContent.css'

const BioContent = ({children}) => {
  return (
    <div className="bio-content">
    <Container>
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default BioContent
