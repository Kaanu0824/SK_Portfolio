import React from 'react'
import AL from '../../assets/jhc.png'
import OL from '../../assets/ktcc.png'
import BSC from '../../assets/sliit.png'
import './education.css'

function Education() {
  return (
    <section id='education'>
        <span className='educationTitle' > Education </span>
        <span className='educationDesc'> I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator. </span>
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