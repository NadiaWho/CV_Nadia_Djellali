import React from 'react'
import Content from '../containers/Content.js'

const Experiences = () => {
        return (
            <Content>
                <div className='experiences'>
                    <h3>Expériences</h3>
                    <h4>Responsable Vendeuse | Maisons du Monde, Chartres Mars 2007 - Février 2018</h4>
                        <p>J’ai été durant 11 ans le bras droit de la Directrice de magasin, ayant à ma tête une 
                        équipe de dix personnes. J’ai également fait des missions de management sur plusieurs sites. <br/>
                        [management, gestion de boutique, relation clientèle, force de vente]</p>
                    
                    <div className='ligne' />  

                    <h4>Fille au pair | Teli Asso, Angleterre 2002 -2003</h4>
                        <p>Bac en poche, j’ai souhaité améliorer mon anglais en étant fille au pair à Brighton.</p>
                </div>
            </Content>
        )
    }

export default Experiences
