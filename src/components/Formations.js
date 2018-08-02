import React from 'react'
import Content from '../containers/Content.js'

const Formations = () => {
        return (
            <Content>
                <div className='formations'>
                <h3>Formations</h3>
                    <h4>Mars-Juillet 2018 – Formation développement web – Wild Code School, Paris</h4>
                        <p>Apprentissage Full Stack (JS /React /Node)</p>
                    
                    <div className='ligne' />  

                    <h4>2003-2006 – L3 – Université François Rabelais, Tours</h4>
                        <p>Niveau 3ème année en Histoire de l’Art et Archéologie</p>

                    <div className='ligne' />

                    <h4>2002 – Bac L – Lycée Jean de Beauce, Chartres</h4>
                        <p>Obtention du Baccalauréat Littéraire</p>
                </div>
            </Content>
        )
    }

export default Formations 
