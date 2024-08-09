import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Face from '../../assets/face.png';
import Git from '../../assets/git.png';
import Insta from '../../assets/ins.png';
import Linke from '../../assets/linke.png';
import './contact.css';

const Contact = ()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('Kaanu_1700', 'template_v2do518', form.current, {
        publicKey: '_Q0aljcJxeRDA8vMe ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },(error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <span id='contactpage'>
        <div id ='contact'>
            <h1 className='contactPageTitle'> Contact  Me  </h1>
            <span className='clientDesc'> Please Fill out the form below to dicuss any work opportunities </span>
            <form className='contactForm' ref={form} onSubmit={sendEmail} >
                <input type='text' className='name' placeholder='Your Name' name="user_name" />
                <input type='email' className='email' placeholder='Your Email' name="user_email" />
                <textarea name='message' rows='5' className='msg' placeholder='Your Feedback' /> 
                <button type='submit' value='Send' className='submitBtn'> Submit </button>
                <div className='links'>
                    <img src={Linke} alt='Linke' className='link'/>
                    <img src={Git} alt='Git' className='link'/>
                    <img src={Face} alt='Face' className='link'/>
                    <img src={Insta} alt='Insta' className='link'/>
                </div>
            </form>
        </div>
    </span>
  )
}

export default Contact