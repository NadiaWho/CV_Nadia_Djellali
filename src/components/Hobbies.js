import React from 'react'
import ContainerMin from '../containers/ContainerMin.js'
import './Hobbies.css'

const Hobbies = () => {
  return (
    <ContainerMin>
      <div id='hobbies'>
        <p><u>CENTRES D'INTERET</u></p>
        <div className='ligne' />
          <ul>
            <li><img src="https://png.icons8.com/ios/80/D2EFEF/star-wars.png" alt='starwars'/>
            <figcaption> Univers Star Wars</figcaption></li>

            <li><img src="https://png.icons8.com/metro/80/D2EFEF/batman-old.png" alt='comics'/>
            <figcaption>Comic Book</figcaption></li>

            <li><img src="https://png.icons8.com/ios/80/D2EFEF/budapest-filled.png" alt='Wes'/>
            <figcaption>Univers Wes Anderson</figcaption></li>

          </ul>
          <ul>
            <li><img src="https://png.icons8.com/metro/80/D2EFEF/autopilot.png" alt='pilote' />
            <figcaption> Aviation</figcaption></li>

            <li><img src="https://png.icons8.com/ios/80/D2EFEF/scuba-diving-filled.png" alt='plongee'/>
            <figcaption>Plongée sous marine</figcaption></li>

            <li><img src="https://png.icons8.com/ios-glyphs/80/D2EFEF/equestrian.png" alt='equitation'/>
            <figcaption>Equitation</figcaption></li>

          </ul>
          <ul>
            <li><img src="https://png.icons8.com/dotty/80/D2EFEF/airplane-take-off.png" alt='avion' />
            <figcaption>Les Voyages</figcaption></li>

            <li><img src="https://png.icons8.com/ios/80/D2EFEF/planet.png" alt='espace'/>
            <figcaption>L'espace</figcaption></li>

            <li><img src="https://png.icons8.com/dotty/80/D2EFEF/museum.png" alt='musee'/>
            <figcaption>Musée & Archéologie</figcaption></li>

          </ul>
        </div>
      </ContainerMin>
  )
}

export default Hobbies
