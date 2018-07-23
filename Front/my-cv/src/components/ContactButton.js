import React from 'react'
import { Link } from '@reach/router'
import './ContactButton.css'

const ContactButton = () => {
  return (
      <Link to='/ContactFormular'>
      <div className='contact-button'>
        <div className="gradient-button" id='box-button'>  Envoyez moi un message </div>
      </div>
      </Link>
  )
}

export default ContactButton
