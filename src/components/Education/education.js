import React from 'react'
import AL from '../../assets/jhc.png'
import OL from '../../assets/ktcc.png'
import BSC from '../../assets/sliit.png'
import './education.css'


function Education() {
  return (
    <section id='education'>
        <span className='educationTitle' > Education </span>
        <span className='educationDesc'> I completed a BSc (Hons) in Software Engineering at the Sri Lanka Institute of Information Technology, specializing in Information Technology. Prior to this, I finished my Advanced Level in the Physical Science stream at Jaffna Hindu College and my Ordinary Level at Kodikamam Thirunavukarasu Central College. </span>
        <div className='educationBars'>
            
        <div className='educationBar'>
                <img src={BSC} alt='BSC' className='educationBarImg'/>
                <div className='educationBarText'>
                    <h2> Bachelor Degree  </h2>
                    <h3>2020 - 2024</h3>
                </div>
            </div>

            <div className='educationBar'>
                <img src={AL} alt='AL' className='educationBarImg'/>
                <div className='educationBarText'>
                    <h2> Advanced Level  </h2>
                    <h3>2017 - 2019</h3>
                </div>
            </div>

            <div className='educationBar'>
                <img src={OL} alt='OL' className='educationBarImg'/>
                <div className='educationBarText'>
                    <h2> Ordinary Level  </h2>
                    <h3> 2006 - 2016 </h3>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Education