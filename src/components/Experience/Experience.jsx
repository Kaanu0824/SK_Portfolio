import React from 'react';
import { experience } from '../../data/portfolio';
import { useReveal } from '../../hooks/useReveal';
import './Experience.css';

const Experience = () => {
  const listRef = useReveal();

  return (
    <section id="experience" className="experience">
      <div className="section-label reveal">Work history</div>
      <h2 className="section-title reveal">Where I've worked.</h2>

      <div className="exp-list" ref={listRef}>
        {experience.map((job) => (
          <div className="exp-card hover-target" key={job.role + job.company}>
            <div className="exp-top">
              <h3 className="exp-role">{job.role}</h3>
              <span className="exp-period">{job.period}</span>
            </div>

            <p className="exp-company">
              {job.company} · {job.location}
            </p>

            <p className="exp-summary">{job.summary}</p>

            <ul className="exp-bullets">
              {job.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b.replace(/(\d+%|\d+ different modules)/g, '<strong>$1</strong>') }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
