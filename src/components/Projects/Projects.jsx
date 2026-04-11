import React, { useState } from 'react';
import './Projects.css';
import { projects } from '../../data/portfolio';

const FILTERS = ['All', 'AI', 'Full Stack', 'Java'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="projects">
      <div className="section-label reveal">Selected work</div>
      <h2 className="section-title reveal">Things I've Built.</h2>
      <p className="section-sub reveal">
        A collection of projects spanning AI, full-stack web development and
        software engineering — built with modern technologies and a focus on
        real-world impact.
      </p>

      {/* ── Filter Bar ── */}
      <div className="projects-filter reveal">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
            <span className="filter-count">
              {f === 'All' ? projects.length : projects.filter(p => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="projects-grid">
        {filtered.map((project, i) => (
          <div
            className={`project-card${project.featured && active === 'All' ? ' project-card--featured' : ''}`}
            key={project.title}
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            {project.featured && active === 'All' && (
              <div className="project-card-accent" />
            )}

            {/* Header */}
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <span className={`project-tag project-tag--${project.tagClass}`}>
                {project.tag}
              </span>
            </div>

            {/* Title & description */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            {/* Highlights */}
            <ul className="project-highlights">
              {project.highlights.map((h, idx) => (
                <li key={idx}>{h}</li>
              ))}
            </ul>

            {/* Stack pills */}
            <div className="project-stack">
              {project.stack.map(s => (
                <span className="stack-pill" key={s}>{s}</span>
              ))}
            </div>

            {/* Footer */}
            <div className="project-footer">
              <a
                className="project-github-btn"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="github-icon">⌥</span>
                View on GitHub
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <a
        className="projects-view-all reveal"
        href="https://github.com/Kaanu0824"
        target="_blank"
        rel="noopener noreferrer"
      >
        View all repositories on GitHub ↗
      </a>
    </section>
  );
};

export default Projects;
