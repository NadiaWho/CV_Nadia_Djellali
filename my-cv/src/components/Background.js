import React from 'react'
import img from '../img/laDefense.jpg' 
import './Background.css'

const Background = () => {
  return (
      <div className='background'>
        <img src= { img } alt='la_Défense'/>
        <p id='leitmotiv'>Nadia Djellali</p>
      </div>
    )
}

export default Background