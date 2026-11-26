import Chat from "./components/Chat/Chat"
import { about, expertise, profile, projects, roles, skills, timeline } from "./data"
import "./App.css"

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero-content-section">
        <div className="hero-content">
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-desc">{profile.tagline}</p>
          <div className="hero-cta">
            <a href="#contact" className="cta-button">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about-section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-left">
              <div className="about-content">
                {about.map((p) => (
                  <p key={p} className="about-text">{p}</p>
                ))}
              </div>
              <a href={profile.cv} className="cv-button" target="_blank" rel="noreferrer">
                <span className="cv-icon">↓</span>
                View My CV
              </a>
            </div>

            <div className="about-right">
              <div className="role-stack">
                {roles.map((r) => (
                  <div key={r.title} className="role-card">
                    <h3 className="role-title">{r.title}</h3>
                    <p className="role-desc">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section expertise-section">
        <div className="container">
          <h2 className="section-title">Core Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((e) => (
              <div key={e.title} className="expertise-card">
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <a href={p.url} target="_blank" rel="noreferrer" className="github-link" title="View on GitHub">
                    <GitHubIcon />
                    <span>Project Link</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section experience-section" id="experience">
        <div className="container">
          <h2 className="section-title">Professional & Academic Journey</h2>
          <div className="timeline">
            {timeline.map((t) => (
              <div key={t.title} className="timeline-item">
                <div className="timeline-marker" />
                <div className="timeline-content">
                  <h3 className="timeline-title">{t.title}</h3>
                  <p className="timeline-date">{t.date}</p>
                  <p className="timeline-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills-section" id="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills & Stack</h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.category} className="skill-category">
                <h3 className="skill-category-title">{s.category}</h3>
                <div className="skill-tags">
                  {s.items.map((i) => (
                    <span key={i} className="skill-tag">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-btn">Email</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="contact-btn">CV</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </footer>

      {/* Chat RAG flottant (bas à droite) */}
      <Chat />
    </div>
  )
}
