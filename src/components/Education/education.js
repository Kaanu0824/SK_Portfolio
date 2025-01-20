import React from 'react'
import AL from '../../assets/jhc.png'
import OL from '../../assets/ktcc.png'
import MSC from '../../assets/msc.png'
import BSC from '../../assets/sliit.png'
import './education.css'


function Education() {

    
  return (
    <section id='education'>
        <span className='educationTitle' > Education </span>
    
            <span className='educationDesc'> 
                I am a proud graduate of the Sri Lanka Institute of Information Technology (SLIIT), where I earned a BSc (Hons) in Software Engineering, specializing in Information Technology. My academic foundation was built at Jaffna Hindu College, where I pursued my Advanced Level in the Physical Science stream, and Kodikamam Thirunavukarasu Central College, where I completed my Ordinary Level studies.  
            </span>  

            <span className='educationDesc'> 
                In 2025, I am set to begin an exciting new chapter by pursuing an MSc in Computer Science at the University of Hertfordshire in the UK. I look forward to further refining my expertise and contributing to innovative advancements in the field.  
            </span>

       
        <div className='educationBars'>

            <div className='educationBar'>
                <img src={MSC} alt='MSC' className='educationBarImg'/>
                <div className='educationBarText'>
                    <h2> Master of Science  </h2>
                    <h3>2025 - Present </h3>
                </div>
            </div>
            
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

        </div>

        {/* School Details */}

        <div className='educationBars'>
{/* 
            <div className='educationBar'>
                <img src={AL} alt='AL' className='educationBarImg'/>
                <div className='educationBarText'>
                    <h2> Advanced Level  </h2>
                    <h3>2017 - 2019</h3>
                </div>
            </div> */}


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