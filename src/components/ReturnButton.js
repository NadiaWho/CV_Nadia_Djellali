import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from '@reach/router'

const ReturnButton = () => {
    return (
            <Link to='/'>
            <div className='return-button'>
            <Col xs={1} xsOffset={0}
                 sm={1} smOffset={2}
                 md={1} mdOffset={2}
                 lg={1} lgOffset={2}>
            <div className="btn-default" id='box-button'>  Retour à la page d'accueil </div>
            </Col>
            </div>
            </Link> 
    )
    
}

export default ReturnButton
