import React from 'react'
import BioContent from '../containers/BioContent'
import './Bio.css'

const Bio = () => {
  return (
    <BioContent>
      <div className='bio'>
        <h1>Nadia DJELLALI</h1>
        <div className='ligne'/>
        <h2><b>Etudiante en développement web JS React</b></h2>
        <h4>djellali.nadia@gmail.com - <a href='tel:+64834523'> 06.50.00.75.42</a></h4>
      </div>
    </BioContent>
  )
}

export default Bio
