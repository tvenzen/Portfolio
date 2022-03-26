import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'

import { response, Router } from 'express';

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const server = require('server')

app.use('/public', express.static(path.join(__dirname, 'public')))

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "",
    pass: ""
  }
})



transporter.verify(function(error, success) {
  if (error){
    console.log(error);
  } else {
    console.log("Server is ready to take out messages!");
  }
});



app.post('/send', (req, res, next) => {
  var name = req.body.firstName + " " + req.body.lastName
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message
  var content = `email: ${email} \n message: ${message}`

  var mail = {
    from: name,
    to: "",
    subject: subject,
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => console.info(`sever has started on ${PORT}`))

function ContactForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("");

    function handleClear(){
        setFirstName("");
        setLastName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    function handleSubmit(e){
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success'){
                alert("Message Sent.");
                handleClear()
            }
            else if (response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
  
      return (
      <>
      <h1> Contact Me</h1>
      <div class="contactForm">
      
  
        <form>
          <label for='fname'> First name: </label>
          <input name="fname" placeholder="John" onChange={(event) => setFirstName(event.target.value)} required/> 
          <hr/> 
  
          <label for='lname'> Last name: </label>
          <input name="lname" placeholder="Doe" onChange={(event) => setLastName(event.target.value)} required/>  
          <hr/>
  
          <label for='email'> Email: </label>
          <input name="email" placeholder='jdoe@example.com' onChange={(event) => setEmail(event.target.value)} required/> 
          <hr/>
  
          <label for='subject'> Subject: </label>
          <input name='subject' placeholder='Enter here...' onChange={(event) => setSubject(event.target.value)} required/>
          <hr />
  
          <label for='message'> Message: </label>
          <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} required/>
          <hr id="textAreaUnderline"/>
  
          <button id="submitButton"  class="siteButton" type='submit'onSubmit={handleSubmit(e)} > Send </button>
  
        </form>
      </div>
  
      
      </>
      )
  }

export default ContactForm;