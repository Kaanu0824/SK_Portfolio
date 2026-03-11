import React, { useState, useEffect } from 'react';
import { personal } from '../../data/portfolio';

const navLinks = [
  { href: '#about',      label: 'About' },
  { href: '#education',  label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact' },
];

const Navbar = () => {
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
      {/* Fixed: use button instead of anchor for scroll-to-top */}
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

      <a
        className="nav-cta"
        href={personal.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume ↗
      </a>

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
