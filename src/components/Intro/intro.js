import React from 'react';
import Face from '../../assets/face.png';
import Git from '../../assets/github.jpeg';
import Insta from '../../assets/ins.png';
import bg from '../../assets/intro-1.png';
import Linke from '../../assets/linke.png';
import What from '../../assets/What.webp';
import './intro.css';

function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello"> Hello </span>
        <span className="introText">
          <span className="typingText">I’m Kaanushan </span> <br /> Software Engineer
        </span>
        <p className="IntroPara">
          I am a Skilled Web Designer with experience in creating visually <br/>
          appealing and user-friendly websites.
        </p>
        <a
          href="https://drive.google.com/file/d/1eqHI1ydMHSqz6wBjbFnJYWa8qMj1bdr9/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn"> Download Resume</button>
        </a>
        <div className='links'>
            <a href='https://www.linkedin.com/in/kaanushan-sivarasa/' target='_blank' rel='noopener noreferrer'>
              <img src={Linke} alt='LinkedIn' className='link' />
            </a>
            <a href='https://github.com/Kaanu0824' target='_blank' rel='noopener noreferrer'>
              <img src={Git} alt='GitHub' className='link' />
            </a>
            <a href='https://wa.me/+94774549953' target='_blank' rel='noopener noreferrer'>
              <img src={What} alt='Whatsapp' className='link' />
            </a>
            <a href='https://www.instagram.com/kaanu_sk_/' target='_blank' rel='noopener noreferrer'>
              <img src={Insta} alt='Instagram' className='link' />
            </a>
            <a href='https://web.facebook.com/KAANUSHAN' target='_blank' rel='noopener noreferrer'>
              <img src={Face} alt='Facebook' className='link' />
            </a>
          </div>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
}

export default Intro;
