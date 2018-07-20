import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import ContainerMin from '../containers/ContainerMin.js'
import './Hobbies.css'

import bb8 from './../img/hobbies/bb8.png'
import comics from './../img/hobbies/comics.png'
import frontEnd from './../img/hobbies/frontEnd.png'
import pilote from './../img/hobbies/pilote.png'
import plongée from './../img/hobbies/plongée.png'
import equitation from './../img/hobbies/equitation.png'
import espace from './../img/hobbies/espace.png'
import musee from './../img/hobbies/musee.png'
import voyages from './../img/hobbies/voyages.png'

const hobbies = [
    { id:'logo1', src: bb8, alt: 'hobbies_logo'},
    { src: comics, alt: 'hobbies_logo'},
    { src: frontEnd, alt: 'hobbies_logo'},
    { src: pilote, alt: 'hobbies_logo'},
    { src: plongée, alt: 'hobbies_logo'},
    { src: equitation, alt: 'hobbies_logo'},
    { src: espace, alt: 'hobbies_logo'},
    { src: musee, alt: 'hobbies_logo'},
    { src: voyages, alt: 'hobbies_logo'},
]

class Hobbies extends React.Component {
    render () {
        return (
            <ContainerMin>
                <div>
                    <ul>
                        <li><img src="https://png.icons8.com/color/80/000000/star-wars.png" alt='starwars' /></li>
                        {/* <li> alt='comics' /></li> */}
                        <li><img src="https://png.icons8.com/ios/80/000000/air-pilot-hat.png" alt='pilote' /></li>
                        <li><img src="https://png.icons8.com/ios/80/000000/scuba-mask.png" alt='plongee'/></li>
                        <li><img src="https://png.icons8.com/ios/80/000000/horseback-riding.png" alt='equitation'/></li>
                        <li><img src="https://png.icons8.com/nolan/100/000000/museum.png" alt='musee'/></li>
                        <li><img src="https://png.icons8.com/nolan/100/000000/full-moon.png" alt='espace'/></li>
                        <li><img src="https://png.icons8.com/nolan/100/000000/airplane-take-off.png" alt='avion' /></li>
                    </ul>
            
            </div>
            </ContainerMin>
        )
}}

export default Hobbies
