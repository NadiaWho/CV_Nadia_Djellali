import React from 'react'
import { Link } from '@reach/router'
import './ReturnButton2.css'

class ReturnButton2 extends React.Component {
    render () {
        return (
            <Link to='/'>
            <div>  Retour à la page d'acceuil </div>
            </Link>
        )
    }
}

export default ReturnButton2