import React from 'react'
import Face from '../../assets/face.png'
import Git from '../../assets/git.png'
import Insta from '../../assets/ins.png'
import Linke from '../../assets/linke.png'
import './contact.css'

function Contact() {
  return (
    <span id='contactpage'>
        <div id ='contact '>
            <h1 className='contactPageTitle'> Contact  Me  </h1>
            <span className='clientDesc'> Please Fill out the form below to dicuss any work opportunities </span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
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