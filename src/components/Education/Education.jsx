import { education, educationNote } from '../../data/portfolio';
import { useStaggerReveal } from '../../hooks/useReveal';
import './Education.css';

import jhcLogo from '../../assets/jhc.jpg';
import ktccLogo from '../../assets/ktcc.jpg';
import mscLogo from '../../assets/msc.jpg';
import sliitLogo from '../../assets/sliit.jpg';

const logoMap = {
  msc:  mscLogo,
  bsc:  sliitLogo,
  al:   jhcLogo,
  ol:   ktccLogo,
};

const Education = () => {
  const gridRef = useStaggerReveal(0.1);

  return (
    <section id="education" className="education">
      <div className="section-label reveal">Academic background</div>
      <h2 className="section-title reveal">
        Education &amp;<br />Qualifications.
      </h2>

      <div className="edu-grid" ref={gridRef}>
        {education.map((edu) => (
          <div
            className={`edu-card hover-target${edu.highlight ? ' edu-card--highlight' : ''}`}
            key={edu.degree}
          >
            
            <div className="edu-card-top">
              <div className="edu-logo-wrap">
                <img
                  src={logoMap[edu.badgeClass]}
                  alt={edu.school}
                  className="edu-logo"
                />
              </div>
              <span className={`edu-badge edu-badge--${edu.badgeClass}`}>
                {edu.badge}
              </span>
            </div>

            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-school">{edu.school}</p>
            <p className="edu-period">{edu.period}</p>
          </div>
        ))}
      </div>

      <p className="edu-note reveal">{educationNote}</p>
    </section>
  );
};

export default Education;
