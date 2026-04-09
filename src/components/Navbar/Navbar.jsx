import { useEffect, useState } from 'react';
import { personal } from '../../data/portfolio';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#education',  label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
  { href: '#projects', label: 'Projects' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <button className="nav-logo" onClick={(e) => handleNav(e, '#hero')}>
        <span className="nav-dot" />
        {personal.firstName}
      </button>

      {/* Desktop links */}
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side: Theme toggle + Resume CTA */}
      <div className="nav-right">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <a
          className="nav-cta"
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}>
            {link.label}
          </a>
        ))}
        <div className="mobile-theme-row">
          <span className="mobile-theme-label">
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </span>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <a
          className="mobile-cta"
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume ↗
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
