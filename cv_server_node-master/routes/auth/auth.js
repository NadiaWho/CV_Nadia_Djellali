
const express = require('express')
const Router = express.Router()
const nodemailer = require('nodemailer')

Router.post('/send-email', function (req, res) {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const messages = req.body.messages
  const tel = req.body.tel

  // const smtpTransport = nodemailer.createTestAccount((err, account) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  })
  const mailOptions = {
    from: '"Nadia" <djellali.nadia@gmail.com>',
    to: 'djellali.nadia@gmail.com',
    subject: 'Message',
    text: `Prenom : ${firstName}
      Nom : ${lastName}
      email : ${email}
      Message : ${messages}
      Tel : ${tel}`
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  })
})

// Router.post('/messages', function(req, res, next) {
//   const firstName = req.body.firstName
//   const lastName = req.body.lastName
//   const email = req.body.email
//   const messages = req.body.messages
//   const tel = req.body.tel
//   const values = [firstName, lastName, email, messages, tel]

//   connection.query(insertUserQuery, values)
//     .then(result => {
//       console.log(result)
//       res.status(200).json({ flash:  'Merci pour votre méssage. Je reviens très vitre vers vous' });
//     })
//     .catch(err => {
//       res.status(500).json({ flash:  err.message });
//     })
// })

module.exports = Router
