import React from 'react'
import { Link } from '@reach/router'
import './ReturnButton.css'

class ReturnButton extends React.Component {
    render () {
        return (
            <Link to='/'>
            <div className="gradient-border" id='box'>  Retour à la page d'acceuil </div>
            </Link>
        )
    }
}

export default ReturnButton