
import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, Code2,
  Database, GraduationCap, Mail, Menu, Moon, Sun, Terminal,
  Wrench, X, MapPin, Layers3, Bug, BookOpen, Download
} from 'lucide-react';

const EMAIL = 'sumitxsingh01@gmail.com';

const EMAIL_COMPOSE_URL =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const skills = [
  { title: 'Programming', icon: Braces, items: ['Python', 'Java', 'SQL'] },
  { title: 'Python foundations', icon: Code2, items: ['Functions', 'OOP', 'Lists & dictionaries', 'Loops & conditions', 'Exception handling'] },
  { title: 'Application support', icon: Wrench, items: ['Debugging', 'Troubleshooting', 'Root cause analysis', 'Issue documentation', 'Problem solving'] },
  { title: 'Database', icon: Database, items: ['MySQL', 'CRUD operations', 'Query optimization'] },
  { title: 'Tools & APIs', icon: Terminal, items: ['Git', 'GitHub', 'Postman', 'REST APIs', 'JSON', 'Linux basics'] },
  { title: 'AI-assisted development', icon: Layers3, items: ['GitHub Copilot', 'ChatGPT for code assistance'] },
];

const projects = [
  {
    number: '01',
    title: 'Night Club',
    subtitle: 'Event Booking System',
    type: 'Java · SQL',
    icon: Database,
    summary: 'An event-booking application focused on dependable user and booking workflows.',
    details: [
      'Collaborated on user and booking modules to support end-to-end functionality.',
      'Implemented database operations to store and retrieve application data.',
      'Tested workflows, identified functional issues, and documented root causes and fixes.',
    ],
    tags: ['Java', 'SQL', 'Database operations', 'Testing'],
  },
  {
    number: '02',
    title: 'CS Quiz Application',
    subtitle: 'Quiz & Progress Tracking',
    type: 'Programming · Firebase',
    icon: Code2,
    summary: 'A quiz application with authentication, timed questions, scoring, and progress tracking.',
    details: [
      'Implemented question handling and score calculation.',
      'Tested app behavior to identify functional and performance issues.',
      'Diagnosed bugs and documented resolutions to improve maintainability.',
    ],
    tags: ['Firebase', 'Authentication', 'Scoring logic', 'Debugging'],
  },
];

const education = [
  { period: '2024 — 2026', degree: 'Master of Computer Applications (MCA)', institution: 'Parul University', score: '9.21 / 10 CGPA', current: true },
  { period: '2021 — 2024', degree: 'Bachelor of Computer Applications (BCA)', institution: 'Galgotias University', score: '7.11 / 10 CGPA' },
  { period: '2020', degree: 'Class XII · JAC Board', institution: 'Jagannath Jain College', score: '51%' },
  { period: '2017', degree: 'Class X · CBSE', institution: 'Sacred Heart School', score: '8.2 CGPA' },
];

function BrandLogo({ onClick, footer = false }) {
  return (
    <a
      className={`brand-logo${footer ? ' footer-brand-logo' : ''}`}
      href="#home"
      onClick={onClick}
      aria-label="Sumit Singh - Home"
    >
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-initials">SS</span>
        <span className="brand-status" />
      </span>
      <span className="brand-copy">
        <span className="brand-name">SUMIT<span>.</span></span>
        <span className="brand-caption">BUILD · DEBUG · CREATE</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const socialLinks = {
    github: 'https://github.com/sumitxsingh',
    linkedin: 'https://www.linkedin.com/in/sumitxsingh01/',
  };

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('sumit-portfolio-theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem('sumit-portfolio-theme', theme);
    } catch {}
  }, [theme]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <BrandLogo onClick={closeMenu} />

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <a
              className="nav-mobile-cta"
              href={EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="nav-actions">
            <button
              className="icon-button theme-toggle"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              className="nav-cta"
              href={EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's talk <ArrowUpRight size={15} />
            </a>

            <button
              className="icon-button menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" />
                OPEN TO ENTRY-LEVEL OPPORTUNITIES
              </div>

              <p className="hero-kicker">HELLO, I'M</p>
              <h1>Sumit Singh<span className="accent-dot">.</span></h1>

              <h2 className="hero-role">
                Software Developer <span className="role-divider">/</span>
                <br className="mobile-break" /> Application Support
              </h2>

              <p className="hero-description">
                MCA graduate who enjoys building useful applications, solving technical problems,
                and making software more reliable with Python, SQL, and a debugging-first mindset.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-secondary"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sumit's GitHub profile"
                >
                  <Code2 size={17} />
                  GitHub
                  <ArrowUpRight size={16} />
                </a>

                <a
                  className="button button-secondary"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Sumit's LinkedIn profile"
                >
                  <ArrowUpRight size={16} />
                  LinkedIn
                </a>

                <a
                  className="button button-secondary"
                  href="/Sumit-Singh-Resume.pdf"
                  download="Sumit-Singh-Resume.pdf"
                >
                  <Download size={17} />
                  Download Resume
                </a>

                <a className="button button-primary" href="#projects">
                  Explore my work <ArrowRight size={17} />
                </a>

                <a
                  className="button button-secondary"
                  href={EMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={17} /> Get in touch
                </a>
              </div>

              <div className="hero-meta">
                <span><MapPin size={15} /> Jhumri Telaiya, Jharkhand</span>
                <span className="meta-separator">·</span>
                <span><GraduationCap size={16} /> MCA · 9.21 / 10</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Decorative code illustration">
              <div className="visual-glow" />
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />

              <div className="code-window">
                <div className="window-top">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>sumit.py</span>
                  <span className="window-status"><span /> running</span>
                </div>

                <div className="code-body">
                  <div><span className="line-no">01</span><span className="code-purple">class</span> <span className="code-blue">Developer</span><span>:</span></div>
                  <div><span className="line-no">02</span><span className="indent" /><span className="code-purple">def</span> <span className="code-yellow">__init__</span><span>(self):</span></div>
                  <div><span className="line-no">03</span><span className="indent indent-two" />self.skills = <span className="code-green">[</span></div>
                  <div><span className="line-no">04</span><span className="indent indent-three" /><span className="code-orange">'Python'</span>,</div>
                  <div><span className="line-no">05</span><span className="indent indent-three" /><span className="code-orange">'SQL'</span>,</div>
                  <div><span className="line-no">06</span><span className="indent indent-three" /><span className="code-orange">'Problem solving'</span></div>
                  <div><span className="line-no">07</span><span className="indent indent-two" /><span className="code-green">]</span></div>
                  <div><span className="line-no">08</span><span className="indent" /><span className="code-purple">def</span> <span className="code-yellow">keep_learning</span><span>(self):</span></div>
                  <div><span className="line-no">09</span><span className="indent indent-two" /><span className="code-purple">return</span> <span className="code-orange">'always'</span><span className="cursor">▍</span></div>
                </div>

                <div className="window-bottom">
                  <span><Check size={13} /> no critical issues</span>
                  <span>UTF-8&nbsp; · &nbsp;Python</span>
                </div>
              </div>

              <div className="float-card float-card-top">
                <span className="float-icon"><Bug size={17} /></span>
                <span><strong>Debug mindset</strong><small>Find · Fix · Document</small></span>
              </div>

              <div className="float-card float-card-bottom">
                <span className="float-icon"><Database size={17} /></span>
                <span><strong>Data & queries</strong><small>SQL · MySQL · CRUD</small></span>
              </div>

              <div className="visual-label">BUILD <span>•</span> DEBUG <span>•</span> IMPROVE</div>
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDown size={13} />
          </a>
        </section>

        <section className="quick-stats" aria-label="Highlights">
          <div className="container stats-grid">
            <div className="stat"><span className="stat-value">9.21<span>/10</span></span><span className="stat-label">MCA CGPA · Parul University</span></div>
            <div className="stat"><span className="stat-value">02</span><span className="stat-label">Projects featured in resume</span></div>
            <div className="stat"><span className="stat-value">Python<span> + </span>SQL</span><span className="stat-label">Core technical strengths</span></div>
            <div className="stat"><span className="stat-value">2<span> paths</span></span><span className="stat-label">Development & application support</span></div>
          </div>
        </section>

        <section className="section section-pad" id="about">
          <div className="container about-grid">
            <div className="about-intro">
              <SectionHeading
                eyebrow="01 / ABOUT ME"
                title={<>Curiosity meets <span className="text-accent">problem-solving.</span></>}
              />
              <p className="about-lead">I care about how software works—and what to do when it doesn't.</p>
            </div>

            <div className="about-content">
              <p>I'm an MCA graduate with a foundation in Python, SQL, and Java. Through hands-on projects, I've worked on application workflows, database operations, testing, and documenting issues and fixes.</p>
              <p>I'm interested in both software development and application support: creating useful features, investigating unexpected behavior, and helping applications stay dependable. I value clear communication, structured troubleshooting, and continuous learning.</p>

              <div className="principles">
                <div><span className="principle-icon"><Code2 size={18} /></span><span><strong>Build thoughtfully</strong><small>Readable code and useful functionality.</small></span></div>
                <div><span className="principle-icon"><Wrench size={18} /></span><span><strong>Troubleshoot methodically</strong><small>Investigate, document, and improve.</small></span></div>
                <div><span className="principle-icon"><BookOpen size={18} /></span><span><strong>Keep learning</strong><small>Grow through practice and feedback.</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt section-pad" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="02 / TECH STACK"
              title={<>Tools I work <span className="text-accent">with.</span></>}
              description="A resume-based snapshot of my technical foundations and working toolkit."
            />

            <div className="skills-grid">
              {skills.map(({ title, icon: Icon, items }, index) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-top">
                    <span className="skill-icon"><Icon size={19} /></span>
                    <span className="card-index">0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <div className="skill-tags">
                    {items.map(item => <span className="skill-tag" key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>

            <p className="skills-note"><span className="note-dot" /> Skills shown reflect the experience and exposure listed in my resume.</p>
          </div>
        </section>

        <section className="section section-pad" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="03 / SELECTED WORK"
              title={<>Projects with a <span className="text-accent">purpose.</span></>}
              description="Hands-on projects that combine application functionality with testing and troubleshooting."
            />

            <div className="projects-grid">
              {projects.map(({ number, title, subtitle, type, icon: Icon, summary, details, tags }) => (
                <article className="project-card" key={title}>
                  <div className="project-topline"><span className="project-number">{number} / PROJECT</span><span className="project-type">{type}</span></div>
                  <div className="project-icon"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p className="project-subtitle">{subtitle}</p>
                  <p className="project-summary">{summary}</p>
                  <ul className="project-details">
                    {details.map(detail => <li key={detail}><Check size={15} /> <span>{detail}</span></li>)}
                  </ul>
                  <div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-footer"><span>PROJECT OVERVIEW</span><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={17} /></span></div>
                </article>
              ))}
            </div>

            <p className="project-note">Project source-code links weren't included in the provided resume, so no unverified repository links are displayed.</p>
          </div>
        </section>

        <section className="section section-alt section-pad" id="education">
          <div className="container education-grid">
            <div className="education-heading">
              <SectionHeading
                eyebrow="04 / EDUCATION"
                title={<>Learning is a <span className="text-accent">journey.</span></>}
                description="Academic background as listed in my resume."
              />
              <div className="education-highlight">
                <GraduationCap size={22} />
                <div><span>POSTGRADUATE DEGREE</span><strong>Master of Computer Applications</strong><small>Parul University · 2024–2026</small></div>
              </div>
            </div>

            <div className="timeline">
              {education.map((item, index) => (
                <article className={`timeline-item ${item.current ? 'timeline-current' : ''}`} key={item.degree}>
                  <div className="timeline-marker"><span /></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                    <span className="score-chip">{item.score}</span>
                  </div>
                  {index === 0 && <span className="current-label">LATEST</span>}
                </article>
              ))}
            </div>

            <div className="coursework">
              <span className="eyebrow">RELEVANT COURSEWORK</span>
              <div className="course-tags">
                {['Python Programming', 'Database Management Systems', 'Object-Oriented Programming', 'Software Engineering', 'Data Structures'].map(course => <span key={course}>{course}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-pad contact-section" id="contact">
          <div className="container contact-panel">
            <div className="contact-orb orb-one" />
            <div className="contact-orb orb-two" />

            <div className="contact-content">
              <span className="eyebrow">05 / CONTACT</span>
              <h2>Have a role or problem<br />in mind? <span className="text-accent">Let's connect.</span></h2>
              <p>I'm interested in entry-level opportunities across software development and application support.</p>

              <a
                className="button button-primary contact-button"
                href={EMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={17} /> {EMAIL} <ArrowUpRight size={16} />
              </a>

              <div className="contact-location"><MapPin size={15} /> Jhumri Telaiya, Jharkhand, India</div>
            </div>

            <div className="contact-side">
              <div className="contact-side-icon"><Mail size={22} /></div>
              <span>BEST WAY TO REACH ME</span>
              <strong>Email</strong>
              <a
                href={EMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Send me a message <ArrowUpRight size={15} />
              </a>
              <div className="contact-line" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <BrandLogo footer />
          <p>Designed with care. Built to keep learning.</p>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
          <span className="copyright">© {new Date().getFullYear()} Sumit Singh</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
