import React from 'react'
import  { Container, Row, Col } from 'reactstrap'
import './Content.css'

const Content = ({children}) => {
  return (
     <Container>
      <Row> 
        <Col>
    <div className="info-content">
          {children}
     </div>
        </Col>
      </Row>
     </Container>
  )
}

export default Content
