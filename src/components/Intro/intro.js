import React from 'react';
import bg from '../../assets/intro-1.png';
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
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
}

export default Intro;
