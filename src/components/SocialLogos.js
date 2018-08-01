import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import './SocialLogos.css'

class SocialLogos extends React.Component {
    render () {
        return (
            <Grid>
            <Row className="socials"> 
               <Col xsHidden={true} mdOffset={0} lgOffset={0}>
                   <a href='https://github.com/NadiaWho' rel="noopener noreferrer" target='_blank'><i className="fab fa-github"></i></a>
               </Col>
               <Col xsHidden={true} mdOffset={0} lgOffset={0}>
                    <a href='https://codepen.io/Nadia_Who/' rel="noopener noreferrer" target='_blank'><i className="fab fa-codepen"></i></a>
               </Col>
               <Col xsHidden={true} mdOffset={0} lgOffset={0}>
                    <a href='https://www.linkedin.com/in/nadia-djellali-77635493/' rel="noopener noreferrer" target='_blank'><i className="fab fa-linkedin"></i></a>
               </Col>
               <Col xsHidden={true} mdOffset={0} lgOffset={0}>
                    <a href='https://twitter.com/Nadia_Who_' rel="noopener noreferrer" target='_blank'><i className="fab fa-twitter"></i></a>
               </Col>
            </Row>
            </Grid>
        )
    }
}

export default SocialLogos