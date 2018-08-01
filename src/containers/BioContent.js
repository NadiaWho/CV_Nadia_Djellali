import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './BioContent.css'

const BioContent = ({children}) => {
  return (
    <Container>
      <Row>
        <Col lg={12} lgOffset={0}>
    <div className="bio-content">
          {children}
    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default BioContent
