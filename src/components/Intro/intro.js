import React from 'react';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hire.png';
import bg from '../../assets/Intro.JPG';
import './intro.css';

function Intro() {
  return (
    
    <section id="intro">

        <div className='introcontent'>
            <span className='hello'> Hello </span>
            <span className='introText'> I'm <span className='introName'> Kaanushan </span> <br/> Software Engineer </span>
            <p className='IntroPara'> I am a Skilled Web Designer with experience in creating visually <br/>apealing and user friendly websites. </p>
            <Link> <button className='btn'> <img src={btnImg} alt='Hire' className='btnImg'/> Hire Me </button> </Link>
        </div>
        <img src={bg} alt="bg" className='bg' /> 
        
    </section>
  )
}

export default Intro