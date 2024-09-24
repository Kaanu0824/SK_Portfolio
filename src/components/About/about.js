import React from 'react';
import AppDevelopment from '../../assets/App.png';
import UIDesign from "../../assets/UIUX.png";
import WebDevelopment from '../../assets/web.png';
import './about.css';


const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle' > What I do </span>
        <span className='aboutDesc'> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator. </span>
        <div className='aboutBars'>

       ``   <div className='aboutBar'>
                <img src={WebDevelopment} alt='WebDevelopment' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2> Web Development </h2>
                    <p> Skilled in building responsive and dynamic websites through front-end and back-end web development. </p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={UIDesign} alt='UIDesign' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2> UI/UX Design</h2>
                    <p> Experienced in crafting intuitive and user-centered designs as a UI/UX designer </p>
                </div>
            </div>

            <div className='aboutBar'>
                <img src={AppDevelopment} alt='AppDevelopment' className='aboutBarImg'/>
                <div className='aboutBarText'>
                    <h2> App Development</h2>
                    <p> Proficient in developing and deploying functional and user-friendly mobile and web applications </p>
                </div>
            </div>

        </div>
     
    </section>
  )
}

export default About