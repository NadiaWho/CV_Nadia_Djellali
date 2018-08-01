import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from '@reach/router'

const ContactButton = () => {
  return (
      <Link to='/ContactFormular'>
      <div className='contact-button'>
      <Col xs={1} xsOffset={6} 
           sm={1} smOffset={2}
           md={1} mdOffset={8}
           lg={1} lgOffset={8}>
        <div className="btn-default" id='box-button'>  Envoyez moi un message </div>
     </Col>
      </div>
      </Link>
  )
}

export default ContactButton
