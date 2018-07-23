import React from 'react'
import BioContent from '../containers/BioContent'
import './Bio.css'

class Bio extends React.Component {
  render () {
    return (
      <BioContent>
        <div className='bio'>
          <h1><b>Nadia DJELLALI</b></h1>
            <div className='ligne'/>
              <h2><b>Etudiante en développement web JS React</b></h2>
                <p>57 avenue de la République, 75011 Paris - djellali.nadia@gmail.com - 06.64.83.45.23</p>
            </div>
      </BioContent>
        )
    }
}

export default Bio
