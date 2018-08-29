import React from 'react'
import { Link } from '@reach/router'
import { Col, FormGroup, FormControl, Button } from 'react-bootstrap'
import BioContent from '../containers/BioContent'
import FormValidator from './FormValidator'
import './ContactFormular.css'


class ContactFormular extends React.Component {
  constructor () {
    super()

    this.validator = new FormValidator([
      {
        field: 'lastName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Merci de renseigner votre nom'
      },
      {
        field: 'firstName',
        method: 'isEmpty',
        validWhen: false,
        message: 'Merci de renseigner votre prénom'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'Désolée mais ce mail n\'est pas valide'
      },
      {
        field: 'tel',
        method: 'isEmpty',
        validWhen: false,
        message: 'Merci de renseigner votre numéro de téléphone'
      },
      {
        field: 'tel',
        method: 'matches',
        args: [/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: 'Ce numéro de téléphone n\'est pas valide'
      }
    ])

    this.state = {
      lastName: '',
      firstName: '',
      email: '',
      tel: '',
      messages: '',
      flash: '',
      validation: this.validator.valid()
    }
    this.submitted = false
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // addEmail = (email) => {
  //   let odlEmail = this.state.email;
  //   email.id = Date.now()
  //   let newEmail = [...odlEmail, email]
  //   this.setState({email: newEmail})
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    // this.addEmail(this.state)
    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true

    if (validation.isValid) {
      // fetch('https://cv-nadia-djellali.herokuapp.com/auth/messages', {
      //   method: 'POST',
      //   headers: new Headers({'Content-Type': 'application/json'
      //   }),
      //   body: JSON.stringify(this.state)
      // })
      //   .then(res => res.json())
      //   .then(
      //     res => this.setState({'flash': res.flash}),
      //     err => this.setState({'flash': err.flash})
      //   )

      fetch('https://nadiadjellali.com/auth/send-email', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state)
      })
    }
  }

  render () {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation

    return (
      <BioContent>
        <div>
          <Link to='/Curriculum'><img src="https://png.icons8.com/dotty/60/ffffff/delete-sign.png" alt='cross' className='cross'/></Link>
          <h1><b>Formulaire de contact</b></h1>
          <p>Pour toutes réponses merci de renseigner les champs demandés</p>

          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="lastNameId">
              <Col xs={12} sm={12} md={6} lg={6}>
                <FormControl
                  type="text"
                  className="last_name"
                  placeholder="Nom"
                  value={this.state.lastName}
                  onChange={ (event) => this.setState({ lastName: event.target.value }) } />
                <span className="help-block">{validation.lastName.message}</span>
              </Col>
            </FormGroup>

            <FormGroup controlId="firstNameId">
              <Col xs={12} sm={12} md={6} lg={6}>
                <FormControl
                  type="text"
                  className="first_name"
                  placeholder="Prénom"
                  value={this.state.firstName}
                  onChange={ (event) => this.setState({ firstName: event.target.value }) } />
                <span className="help-block">{validation.firstName.message}</span>
              </Col>
            </FormGroup>

            <FormGroup controlId="telId">
              <Col xs={12} sm={12} md={6} lg={6}>
                <FormControl
                  type="tel"
                  className="num_tel"
                  placeholder="Numéro de téléphone"
                  value={this.state.tel}
                  onChange={ (event) => this.setState({ tel: event.target.value }) } />
                <span className="help-block">{validation.tel.message}</span>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col xs={12} sm={12} md={6} lg={6}>
                <FormControl
                  type="email"
                  id="emailId"
                  className="adress_email"
                  placeholder="Adresse mail"
                  value={this.state.email}
                  onChange={ (event) => this.setState({ email: event.target.value }) } />
                <span className="help-block">{validation.email.message}</span>
              </Col>
            </FormGroup>

            <FormGroup controlId="messageId">
              <Col xs={12} sm={12} md={12} lg={12}>
                <FormControl componentClass="textarea"
                  className="formMessage" rows="8"
                  placeholder="Votre message ..."
                  value={this.state.messages}
                  onChange={ (event) => this.setState({ messages: event.target.value }) }/>
              </Col>
            </FormGroup>

            <div className='formular-button'>
              <Col xsOffset={7} mdOffset={9} lgOffset={10}>
                <Button type="submit" className="btn-default" id='box-button'><h5>  > Envoyez</h5></Button>
              </Col>
            </div>
          </form>
          <p className="status-message">
          {this.state.flash ? JSON.stringify(this.state.flash) : ''}
        </p>{ console.log(this.state)}
        </div>
      </BioContent>
    )
  }
}

export default ContactFormular
