import photo from '../../assets/kaanushan.png';
import { personal, socials, stats } from '../../data/portfolio';

const Hero = () => {
  const linkedin = socials.find(s => s.label === 'LinkedIn');
  const github   = socials.find(s => s.label === 'GitHub');
  const whatsapp = socials.find(s => s.label === 'WhatsApp');

  return (
    <section id="hero" className="hero">
      {/* Background effects */}
      <div className="hero-orb hero-orb--1" />
      <div className="hero-orb hero-orb--2" />
      <div className="hero-grid-bg" />

      {/* LEFT — Text content */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          {personal.tagline}
        </div>

        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">
          {personal.firstName}
          <span className="hero-name-ghost">Sivarajah</span>
        </h1>

        <p className="hero-role">{personal.role}</p>

        <p className="hero-desc">{personal.description}</p>

        <div className="hero-actions">
          <a className="btn-solid" href="#contact">Get in touch →</a>
          <a className="btn-outline" href="#about">View my work</a>
        </div>
      </div>

      {/* RIGHT — Photo + card */}
      <div className="hero-right">
        {/* Photo display */}
        <div className="hero-photo-wrap">
          <div className="hpw-glow" />
          <div className="hpw-ring" />
          <img
            className="hpw-img"
            src={photo}
            alt="Kaanushan Sivarasa"
          />
          <div className="hpw-badge">📍 {personal.location}</div>
        </div>

        {/* Profile card */}
        <div className="profile-card">
          <div className="pc-header">
            <div className="pc-avatar-wrap">
              <img
                className="pc-avatar"
                src={photo}
                alt="Kaanushan Sivarasa"
              />
            </div>
            <div>
              <div className="pc-name">{personal.name}</div>
              <div className="pc-title">Software Engineer · MSc Student</div>
            </div>
          </div>

          <div className="pc-stats">
            {stats.map((s) => (
              <div className="pc-stat" key={s.label}>
                <span className="pc-stat-num">{s.num}</span>
                <span className="pc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="pc-links">
            {linkedin && (
              <a className="pc-link" href={linkedin.url} target="_blank" rel="noopener noreferrer">
                <span className="pc-link-icon">in</span>
                {linkedin.short}
              </a>
            )}
            {github && (
              <a className="pc-link" href={github.url} target="_blank" rel="noopener noreferrer">
                <span className="pc-link-icon">⌥</span>
                {github.short}
              </a>
            )}
            {whatsapp && (
              <a className="pc-link" href={whatsapp.url} target="_blank" rel="noopener noreferrer">
                <span className="pc-link-icon">📱</span>
                {whatsapp.short}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-bar" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
