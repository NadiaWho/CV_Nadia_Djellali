import React from 'react'
import img from '../img/laDefense.jpg'
import './Background.css'

const Background = () => {
  return (
    <Container-fluid no-padding>
        <div className='background'>
      <img className='img-responsive' src= { img } alt='la_Défense'/>
    </div>
    </Container-fluid>
  )
}

export default Background
