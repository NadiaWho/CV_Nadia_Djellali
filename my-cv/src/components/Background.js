import React from 'react'
import img from '../img/laDefense.jpg' 
import './Background.css'

const Background = () => {
  return (
      <div>
        <img src= { img } alt='la_Défense'/>
        <p id='leitmotiv'>"Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie" - Confucius</p>
      </div>
    )
}

export default Background