import React from 'react';
import { aboutParagraphs, services, skills } from '../../data/portfolio';
import { useReveal, useStaggerReveal } from '../../hooks/useReveal';

const About = () => {
  const leftRef   = useReveal();
  const cardsRef  = useStaggerReveal(0.1);
  const pillsRef  = useStaggerReveal(0.05);

  return (
    <section id="about" className="about">
      <div className="section-label reveal">What I do</div>
      <h2 className="section-title reveal">Skilled. Passionate.<br />Detail-oriented.</h2>
      <p className="section-sub reveal">
        A skilled and passionate web designer with experience in creating visually appealing
        and user-friendly websites — proficient in HTML, CSS, JavaScript, and design tools
        like Adobe Photoshop and Illustrator.
      </p>

      <div className="about-grid">
        {/* Left: text + skills */}
        <div ref={leftRef} className="about-left reveal">
          {aboutParagraphs.map((p, i) => (
            <p className="about-para" key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}

          <div className="skills-block">
            <div className="skills-label">Core Technologies</div>
            <div className="skills-pills" ref={pillsRef}>
              {skills.map((s) => (
                <span className="skill-pill hover-target" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: service cards */}
        <div className="service-cards" ref={cardsRef}>
          {services.map((svc) => (
            <div className="scard hover-target" key={svc.title}>
              <div className="scard-icon">{svc.icon}</div>
              <div className="scard-body">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
