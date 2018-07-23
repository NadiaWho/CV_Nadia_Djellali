


// import React from 'react'
// import { Link } from '@reach/router'
// import './ContactFormular.css'
// import BioContent from '../containers/BioContent'

// const initialInputValues = {
//   reuseableInfo: false,
//   firstName: '',
//   lastName: '',
//   phoneNumber: '',
//   email: '',
//   demande:''
// }

// class ContactFormular extends React.Component {
//   state = {
//     inputs: initialInputValues,
//     textarea: initialInputValues
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     alert('Merci pour votre message')
//   }

//   render () {
//     const inputs = this.state.inputs

//     return (
//     <BioContent>
//       <div id='subscribers-form'>
 
// <form onSubmit={this.handleSubmit}>
// <Link to='/Curriculum'><img src="https://png.icons8.com/dotty/60/ffffff/delete-sign.png" alt='deleted'/></Link>
//     <h1><b>Formulaire de contact</b></h1>
//     <p>Pour toutes réponses veuillez renseigner les champs demandés</p>
//     <label>
//       <input type='text' name='lastName' placeholder='Nom' value={inputs.lastName} onChange={this.handleChange}/>
//       </label>  
//       <label>
//       <input type='text' name='firstName' placeholder='Prénom' value={inputs.firstName} onChange={this.handleChange} />
//     </label>
//     <label>
//       <input type='text' name='phoneNumber' placeholder='Numéro de téléphone' value={inputs.phoneNumber} onChange={this.handleChange}/>
//       </label> 
//       <label> 
//       <input type='text' name='email' placeholder='Adresse e-mail' value={inputs.email} onChange={this.handleChange}/>
//     </label>
//     <label>
//     <textarea value={this.state.value} onChange={this.handleChange} placeholder='Votre message...'/>
//   </label><br/>
//   <label>
//    <input type='submit' value='envoyer' />
//     <div className='gradient-button' id='box-button'> > Envoyez  </div>
//   </label>
//   </form>
//        </div>
//        </BioContent>
//      )
//    }
//  }
//  export default ContactFormular