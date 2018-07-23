import React from 'react'
import { Link } from '@reach/router'
import './ReturnButton.css'

const ReturnButton = () => {
    return (
            <Link to='/'>
            <div className="gradient-button" id='box-button'>  Retour à la page d'accueil </div>
            </Link>
    )
    
}

export default ReturnButton
