import React from 'react'
// import  { Container, Row, Col } from 'reactstrap'
import './Content.css'

const Content = ({children}) => {
  return (
    <div className="info-content">
    {/* {/* <Container> */}
      {/* <Row>  */}
        {/* <Col> */}
          {children}
        {/* </Col> */}
      {/* </Row> */}
    {/* // </Container> */}
     </div>
  )
}

export default Content
