import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

import Container from '../container/Container.js'
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
            <Container>
            <ResponsiveMasonry
            columnsCountBreakPoints={{350: 3, 750: 3, 900: 3}}>
              <Masonry>
              {hobbies.map((item, i) =>
            <div className='hobbies_logos' key={i}>
             <img
                src={item.src}
                alt={item.alt}
            />
            </div>
            )}
            </Masonry>
            </ResponsiveMasonry>
            </Container>
        )
}}

export default Hobbies
