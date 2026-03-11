import React from 'react';
import { personal, socials } from '../../data/portfolio';
import './Footer.css';

const footerLinks = socials.filter(s =>
  ['LinkedIn', 'GitHub', 'Instagram'].includes(s.label)
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      {personal.firstName}<span className="footer-dot">.</span>
    </div>
    <p className="footer-copy">
      © {new Date().getFullYear()} {personal.name} · All rights reserved
    </p>
    <div className="footer-links">
      {footerLinks.map((s) => (
        <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
          {s.label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
