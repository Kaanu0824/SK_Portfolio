import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Face from '../../assets/face.png';
import Git from '../../assets/git.png';
import Insta from '../../assets/ins.png';
import Linke from '../../assets/linke.png';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Kaanu_1700', 'template_v2do518', form.current, {
        publicKey: '_Q0aljcJxeRDA8vMe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.'); 
        },
      );
  };

  return (
    <span id='contactpage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='clientDesc'>Please fill out the form below to discuss any work opportunities</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='user_name' required />
          <input type='email' className='email' placeholder='Your Email' name='user_email' required />
          <textarea name='message' rows='5' className='msg' placeholder='Your Feedback' required />
          <button type='submit' className='submitBtn'>Submit</button>

          <div className='links'>
            <a href='https://www.linkedin.com/in/kaanushan-sivarasa/' target='_blank' rel='noopener noreferrer'>
              <img src={Linke} alt='LinkedIn' className='link' />
            </a>
            <a href='https://github.com/Kaanu0824' target='_blank' rel='noopener noreferrer'>
              <img src={Git} alt='GitHub' className='link' />
            </a>
            <a href='https://web.facebook.com/KAANUSHAN' target='_blank' rel='noopener noreferrer'>
              <img src={Face} alt='Facebook' className='link' />
            </a>
            <a href='https://www.instagram.com/kaanu_sk_/' target='_blank' rel='noopener noreferrer'>
              <img src={Insta} alt='Instagram' className='link' />
            </a>
          </div>
        </form>
      </div>
    </span>
  );
};

export default Contact;
