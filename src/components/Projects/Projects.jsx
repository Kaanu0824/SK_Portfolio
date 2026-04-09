import { projects } from '../../data/portfolio';
import { useStaggerReveal } from '../../hooks/useReveal';
import './Projects.css';

const Projects = () => {
  const gridRef = useStaggerReveal(0.12);

  return (
    <section id="projects" className="projects">
      <div className="section-label reveal">Selected work</div>
      <h2 className="section-title reveal">Things I've Built.</h2>
      <p className="section-sub reveal">
        A collection of projects spanning AI, full-stack web development and
        software engineering — built with modern technologies and a focus on
        real-world impact.
      </p>

      <div className="projects-grid" ref={gridRef}>
        {projects.map((project) => (
          <div
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
            key={project.title}
          >
            {/* Top accent line on featured */}
            {project.featured && <div className="project-card-accent" />}

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
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {/* Stack pills */}
            <div className="project-stack">
              {project.stack.map((s) => (
                <span className="stack-pill" key={s}>{s}</span>
              ))}
            </div>

            {/* Footer link */}
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

      {/* View all link */}
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