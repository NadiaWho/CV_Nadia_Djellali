require('dotenv').config()
const express = require('express')
const Router = express.Router()
const nodemailer = require('nodemailer')

Router.post('/send-email', function (req) {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.email
  const messages = req.body.messages
  const tel = req.body.tel

  const smtpTransport = nodemailer.createTestAccount((err, account) => {
  const transporter = nodemailer.createTransport({
    HOSTNAME: 'smtp.gmail.com',
    SMTP_PORT: 465,
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

    // verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
       console.log(error);
  } else {
       console.log('Server is ready to take our messages');
  }
})
  })
})

module.exports = Router
