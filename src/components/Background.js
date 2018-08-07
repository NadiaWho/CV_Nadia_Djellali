import React from 'react'
import img from '../img/laDefense.jpg'
import './Background.css'

const Background = () => {
  return (
    <div className='background'>
      <img src= { img } alt='la_Défense'/>
      <div>
        <h1 id='my-name'>Nadia Djellali</h1>
      </div>
    </div>
  )
}

export default Background
