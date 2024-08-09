import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './experience.css';

function Experience() {
  return (
    <section id='experience'>
    <span className='educationTitle'>Experience</span>
    <div className='timeline'>
        <div className='timeline-item'>
            <div className='timeline-icon'>
                <FaBriefcase />
            </div>
            <div className='timeline-content'>
                <h2> Intern Software Engineer - DH3 Solutions Private Limited</h2>
                <span>June 2022 - February 2023 </span>
                <p>
                    I worked as a front-end developer for the LB Finance wallet application, an ongoing project developed by DH3 Solutions Private Limited 
                    (Silver Leap Technology Pvt Ltd). The application has both a web portal and a mobile app for customers' daily banking needs.<br/>
                </p>
                <ul >
                    <li>Created user interface components that adjust to different screen sizes using React techniques, resulting in a 20% faster loading time for webpages.</li>
                    <li>Implemented application interface using React JS workflows and JavaScript, converting design and wireframe into high-quality code for 10 different modules.</li>
                    <li>Improved existing add-ins and contributed to the development of new features, resulting in a 30% increase in user engagement and satisfaction.</li>
                    <li>Developed a new software feature, resulting in a 15% increase in user engagement.</li>
                </ul>
            </div>
        </div>
    </div>
</section>

  )
}

export default Experience
