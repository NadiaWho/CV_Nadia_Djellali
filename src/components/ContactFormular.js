import React from 'react'
import { Link } from '@reach/router'
import { Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import './ContactFormular.css'
import BioContent from '../containers/BioContent'

const initialInputValues = {

}

class ContactFormular extends React.Component {
  state = {
    inputs: initialInputValues,
    // textarea: initialInputValues
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci pour votre message')

    const data = this.state.inputs

    fetch('/subscribers', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    })
  }

  render () {
    const inputs = this.state.inputs

    return (
<BioContent>
<Form ContactFormular>
  <Link to='/Curriculum'><img src="https://png.icons8.com/dotty/60/ffffff/delete-sign.png" alt='cross'/></Link>
  
    <h1><b>Formulaire de contact</b></h1>
    <p>Pour toutes réponses merci de renseigner les champs demandés</p>
    <FormGroup controlId="formLastName">
    <Col xs={12} sm={12} md={6} lg={6}>
    <FormControl type="text" placeholder="Nom" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formFirstName">
    <Col xs={12} sm={12} md={6} lg={6}>
    <FormControl type="text" placeholder="Prénom" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formEmail">
    <Col xs={12} sm={12} md={6} lg={6}>
      <FormControl type="text" placeholder="adresse mail" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formPhone">
    <Col xs={12} sm={12} md={6} lg={6}>
      <FormControl type="text" placeholder="Numéro de téléphone" />
    </Col>
  </FormGroup>

    <FormGroup controlId="formTextarea">
    <Col xs={12} sm={12} md={12} lg={12}>
      <FormControl componentClass="textarea" placeholder="Votre message ..." />
      </Col>
    </FormGroup>

    <div className='formular-button'>
    <Col xsOffset={8} mdOffset={9} lgOffset={10}>
      <Button className="btn-default" id='box-button'>  > Envoyez</Button>
    </Col>
      
      </div>
</Form>
</BioContent>

    )
  }
}
export default ContactFormular
