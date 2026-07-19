import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { personal } from '../../data/portfolio';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll detection — scrolled state + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Find which section is currently in view
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>

      {/* Logo */}
      <button className="nav-logo" onClick={(e) => handleNav(e, '#hero')}>
        <span className="nav-dot" />
        {personal.firstName}
      </button>

      {/* Desktop links */}
      <ul className="nav-links">
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive  = activeSection === sectionId;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={(e) => handleNav(e, link.href)}
              >
                {link.label}
                {isActive && <span className="nav-active-dot" />}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Right: theme toggle + resume */}
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
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive  = activeSection === sectionId;
          return (
            <a
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : ''}
              onClick={(e) => handleNav(e, link.href)}
            >
              {isActive && <span className="mobile-active-bar" />}
              {link.label}
            </a>
          );
        })}

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
