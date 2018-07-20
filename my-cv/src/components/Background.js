import React from 'react'
import img from '../img/laDefense.jpg' 
import './Background.css'

const Background = () => {
  return (
      <div className='background'>
        <img src= { img } alt='la_Défense'/>
        <div>
        <p id='leitmotiv'>Nadia Djellali</p>
        <p id='construction'>...site en construction...</p>
        
        </div>
      </div>
    )
}

export default Background