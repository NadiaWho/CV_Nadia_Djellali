import React from 'react'
import BioContent from '../containers/BioContent'
import './Bio.css'

const Bio = () => {
    return (
      <BioContent>
        <div className='bio'>
          <h1><b>Nadia DJELLALI</b></h1>
            <div className='ligne'/>
              <h2><b>Etudiante en développement web JS React</b></h2>
                <p>djellali.nadia@gmail.com - 06.64.83.45.23</p>
            </div>
      </BioContent>
  )
}

export default Bio
