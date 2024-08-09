import React from 'react';
import btnImg from '../../assets/hire.png';
import bg from '../../assets/Intro.JPG';
import './intro.css';


function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello"> Hello </span>
        <span className="introText">
          I'm <span className="introName"> Kaanushan </span> <br /> Software Engineer
        </span>
        <p className="IntroPara">
          I am a Skilled Web Designer with experience in creating visually <br />
          appealing and user-friendly websites.
        </p>
        <a
          href="https://drive.google.com/file/d/1cBhhithAjv_DlsBNw5eEx5HGbqydYJl5/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" /> Download Resume
          </button>
        </a>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
}

export default Intro;
