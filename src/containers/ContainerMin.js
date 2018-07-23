import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './ContainerMin.css'

const ContainerMin = ({children}) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container-min">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ContainerMin
