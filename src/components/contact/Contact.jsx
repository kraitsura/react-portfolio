import React from 'react'
import './contact.css'
import {GiMailbox} from 'react-icons/gi'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gbr2gc7', 'template_zaag5en', form.current, '_3IqPyBFr5ntFRe5V')
    
    e.target.reset()
    alert("Message Sent!")
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Information</h2>

      <div className="container contact__container">
        <div className="contact__cards">
          <article className="contact__option">
            <GiMailbox className='icon'/>
            <h5>Email</h5>
            <h5>b.aarya.reddy@gmail.com</h5>
            <a href="mailto:b.aarya.reddy@gmail.com">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsFillPhoneVibrateFill className='icon'/>
            <h5>WhatsApp</h5>
            <h5>+1 (341)348-1317</h5>
            <a href="https://api.whatsapp.com/send?phone=13413481317" target='_blank'>Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name*' required/>
          <input type="email" name='email' placeholder='Email*' required/>
          <textarea name="message" rows='7' placeholder='Type Message' required></textarea>
          <button type='submit' className='button button-prime'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact