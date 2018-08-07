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
          <div className="btn-default" id='box-button'><h5>  Envoyez moi un message </h5></div>
        </Col>
      </div>
    </Link>
  )
}

export default ContactButton
