import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import portraitImage from './assets/lohith-portrait.jpg';
import heroPortrait from './assets/20251020_064102.jpg.jpeg';
import resumePdf from './assets/Lohith D Resume.pdf';

const projects = [
  {
    number: '01',
    title: 'Creative Media',
    category: 'BGS College · 11 months',
    accent: 'lavender',
    description: '30+ promotional videos, reels, posters, and branding assets for the MBA Department.',
    role: 'Creative Media Editor & Program Coordinator',
    tools: 'Premiere Pro, After Effects, Illustrator, Canva',
    details: 'Created promotional videos, reels, posters, social media creatives, and event materials for the MBA Department at BGS College.',
    result: '30+ pieces of content across video, design, and event communication.',
    visualLabel: 'Video · Motion · Brand'
  },
  {
    number: '02',
    title: 'Meal Finder',
    category: 'Frontend project · 2025',
    accent: 'citrus',
    description: 'A responsive meal discovery experience with search, filters, recipe details, and live API data.',
    role: 'Frontend Developer Intern · Doctor Java Technologies',
    tools: 'HTML, CSS, JavaScript, REST API',
    details: 'Built an interactive meal discovery site with real-time API data, keyword search, category filters, recipe details, and a responsive interface.',
    result: 'A focused, responsive recipe discovery flow.',
    visualLabel: 'Search · API · UI'
  },
  {
    number: '03',
    title: 'Library System',
    category: 'Full-stack project',
    accent: 'coral',
    description: 'A Django and MySQL library platform with secure roles, book tracking, and smart search.',
    role: 'Final Year Project',
    tools: 'Python, Django, MySQL, JavaScript, jQuery',
    details: 'Developed separate student and admin modules with secure sign-in, book management, issue and return tracking, fine calculation, and real-time search.',
    result: 'A complete academic project with role-based workflows.',
    visualLabel: 'Django · MySQL · Systems'
  }
];

const skills = [
  { name: 'Adobe Illustrator', shortName: 'Ai', className: 'illustrator', group: 'Design' },
  { name: 'Adobe Premiere Pro', shortName: 'Pr', className: 'premiere', group: 'Edit' },
  { name: 'Adobe After Effects', shortName: 'Ae', className: 'after-effects', group: 'Motion' },
  { name: 'Adobe Lightroom', shortName: 'Lr', className: 'lightroom', group: 'Photo' },
  { name: 'Canva', shortName: 'Ca', className: 'canva', group: 'Design' },
  { name: 'CapCut', shortName: 'Cc', className: 'capcut', group: 'Edit' }
];

const driveUrl = 'https://drive.google.com/drive/folders/18gswzzOMhOCAbSjmwK8qySJMl0GFQT3S?usp=sharing';
const linkedinUrl = 'https://www.linkedin.com/in/lohithd';
const instagramUrl = 'https://www.instagram.com/_.lohith._02?igsi=dXAwNGF0bWNjczB0';

function ArrowIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

function DriveIcon() {
  return <svg className="drive-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#0F9D58" d="M8.6 1.7h6.7l6.9 11.8h-6.7z" />
    <path fill="#4285F4" d="M15.5 13.5h6.7l-3.8 6.6H4.8l3.8-6.6z" />
    <path fill="#F4B400" d="M8.6 1.7l3.8 6.6-7.6 13.1L1.5 14.1z" />
  </svg>;
}

function LinkedInIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 8.4v9.3M6.3 5.8v.1M10.4 17.7v-5.4c0-1.7 1-2.8 2.5-2.8s2.4 1.1 2.4 2.8v5.4M10.4 11.8c.4-1.4 1.5-2.3 3.1-2.3 2.2 0 3.6 1.5 3.6 4.2v4" /></svg>;
}

function InstagramIcon() {
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><path d="M17.6 6.7h.01" /></svg>;
}

function CanvasBackdrop() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const nodes = [];
    let animationFrame;
    let time = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      nodes.length = 0;
      const spacing = width < 600 ? 74 : 92;
      for (let y = spacing / 2; y < height + spacing; y += spacing) {
        for (let x = spacing / 2; x < width + spacing; x += spacing) {
          nodes.push({ x, y, homeX: x, homeY: y, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      time += 0.008;
      nodes.forEach((node) => {
        node.vx += (node.homeX - node.x) * 0.012;
        node.vy += (node.homeY - node.y) * 0.012;
        node.vx *= 0.88;
        node.vy *= 0.88;
        node.x += node.vx;
        node.y += node.vy;
        node.x += Math.sin(time + node.homeY * 0.01) * 0.05;
        node.y += Math.cos(time + node.homeX * 0.008) * 0.05;
        context.fillStyle = 'rgba(0, 242, 254, 0.25)';
        context.beginPath();
        context.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        context.fill();
      });
      context.strokeStyle = 'rgba(6, 182, 212, 0.08)';
      context.lineWidth = 1;
      nodes.forEach((node, index) => {
        const next = nodes[index + 1];
        const below = nodes[index + Math.round(width / (width < 600 ? 74 : 92))];
        if (next && Math.abs(next.homeY - node.homeY) < 2) {
          context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(next.x, next.y); context.stroke();
        }
        if (below) {
          context.beginPath(); context.moveTo(node.x, node.y); context.lineTo(below.x, below.y); context.stroke();
        }
      });
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animationFrame); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas className="canvas-backdrop" ref={canvasRef} aria-hidden="true" />;
}

function ContactPage() {
  const submitted = new URLSearchParams(window.location.search).get('submitted') === 'true';

  return (
    <div className="contact-page">
      <CanvasBackdrop />
      <header className="topbar contact-topbar">
        <a className="logo" href="#top" aria-label="Lohith D home">LD<span>.</span></a>
        <a className="back-link" href="#top"><span aria-hidden="true">←</span> Back to portfolio</a>
      </header>
      <main className="contact-main">
        <div className="contact-intro">
          <p className="eyebrow">Start a conversation</p>
          <h1>Tell me about<br /><em>your project.</em></h1>
          <p className="contact-note">Share a few details and I’ll get back to you with the next steps.</p>
        </div>
        <form className="brief-form" action="https://formsubmit.co/happydeath2004@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New portfolio project enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://lohith0223.github.io/lohith-portfolio/?submitted=true#contact-form" />
          <label>What’s your name<input name="name" type="text" placeholder="Your name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>What do you need help with?<select name="projectType" defaultValue="" required><option value="" disabled>Select a project type</option><option>Video editing & motion</option><option>Videography</option><option>Photography</option><option>Branding & social content</option><option>Frontend development</option><option>Something else</option></select></label>
          <label>Tell me about the work<textarea name="message" rows="5" placeholder="What are you building, and what would you like this project to achieve?" required /></label>
          <button className="submit-button" type="submit">Send project brief <ArrowIcon /></button>
          {submitted && <p className="form-success" role="status">Thanks, your brief is ready to talk through. I’ll be in touch soon.</p>}
        </form>
      </main>
      <footer><span>© {new Date().getFullYear()} Lohith D</span><span>happydeath2004@gmail.com</span></footer>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [contactPage, setContactPage] = useState(window.location.hash === '#contact-form');
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleHashChange = () => setContactPage(window.location.hash === '#contact-form');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 26;
      const y = (event.clientY / window.innerHeight - 0.5) * 26;
      setPointer({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (contactPage) return <ContactPage />;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className="site-shell"
      style={{
        '--pointer-x': `${pointer.x}px`,
        '--pointer-y': `${pointer.y}px`
      }}
    >
      <div className="ambient-bg" aria-hidden="true"><span className="orb orb-one"></span><span className="orb orb-two"></span><span className="orb orb-three"></span><span className="grid-noise"></span></div>
      <header className="topbar">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Lohith D home">LD<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation">
          <span>Menu</span><span className="menu-chevron" aria-hidden="true">⌄</span>
        </button>
        <nav id="navigation" className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href={resumePdf} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
          <a href="#contact-form" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="intro-heading">
          <div className="hero-meta"><p className="eyebrow">Bengaluru · India</p><span className="availability"><i></i> Available for opportunities</span></div>
          <h1 id="intro-heading">Lohith D —<br /><em>UI/UX Designer,</em><br />Content Creator & Editor.</h1>
          <div className="hero-footer">
            <p>I design clear interfaces, create visual stories,<br />and edit work with rhythm and intention.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#work">View work <ArrowIcon /></a>
              <a className="secondary-button" href={resumePdf} target="_blank" rel="noreferrer">Download resume <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="work section" id="work" aria-labelledby="work-heading">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">Selected work,<br /><em>with intent.</em></h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="card-top"><span>{project.number}</span><span>{project.category}</span></div>
                <div className="project-art project-visual">
                  <span className="visual-index">CASE STUDY / {project.number}</span>
                  <strong>{project.title}</strong>
                  <span className="visual-label">{project.visualLabel}</span>
                </div>
                <div className="card-bottom">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <button className="project-arrow" onClick={() => setActiveProject(project)} aria-label={`View ${project.title} details`} aria-haspopup="dialog"><ArrowIcon /></button>
                </div>
              </article>
            ))}
          </div>
          <div className="work-note"><span>Full archive</span><a href={driveUrl} target="_blank" rel="noreferrer">Browse the visual work on Drive <ArrowIcon /></a></div>
        </section>

        <section className="capabilities section" aria-labelledby="capabilities-heading">
          <div className="section-heading"><p className="eyebrow">What I bring</p><h2 id="capabilities-heading">A hybrid<br /><em>toolkit.</em></h2></div>
          <div className="capability-list"><div><span>01</span><h3>UI/UX design</h3><p>Clear layouts, visual systems, and responsive experiences shaped around people.</p></div><div><span>02</span><h3>Content creation</h3><p>Posters, reels, motion graphics, branding, and event communication with a point of view.</p></div><div><span>03</span><h3>Editing & frontend</h3><p>Video editing and polished interfaces brought together with rhythm, detail, and purpose.</p></div></div>
        </section>

        <section className="skills section" aria-labelledby="skills-heading">
          <div className="section-heading"><p className="eyebrow">Tools of the trade</p><h2 id="skills-heading">Made with<br /><em>the right tools.</em></h2></div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className={`app-icon ${skill.className}`} aria-hidden="true"><span>{skill.shortName}</span></div>
                <div><h3>{skill.name}</h3><p>{skill.group}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience" aria-labelledby="experience-heading">
          <div className="section-heading"><p className="eyebrow">Experience</p><h2 id="experience-heading">Learning by<br /><em>making.</em></h2></div>
          <div className="experience-row"><span className="experience-date">2024—25</span><div><h3>Creative Media Editor & Program Coordinator</h3><p>BGS College · MBA Department</p></div><p>Promotional video, social content, posters, and event materials across an 11-month engagement.</p></div>
          <div className="experience-row"><span className="experience-date">2025</span><div><h3>Frontend Developer Intern</h3><p>Doctor Java Technologies</p></div><p>Built Meal Finder, a responsive interface for discovering recipes through live API data.</p></div>
        </section>

        {activeProject && (
          <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
            <section className={`project-modal ${activeProject.accent}`} role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details">×</button>
              <p className="eyebrow">{activeProject.category}</p>
              <h2 id="project-modal-title">{activeProject.title}</h2>
              <p className="modal-role">{activeProject.role}</p>
              <p className="modal-copy">{activeProject.details}</p>
              <p className="modal-tools"><span>Tools</span>{activeProject.tools}</p>
            </section>
          </div>
        )}

        <section className="about section" id="about" aria-labelledby="about-heading">
          <p className="eyebrow">A little about me</p>
          <div className="about-content">
            <div className="portrait photo"><img src={portraitImage} alt="Lohith D smiling" loading="lazy" /></div>
            <div>
              <h2 id="about-heading">I work where the timeline meets the browser.</h2>
              <p className="body-copy">I’m Lohith, a BCA graduate from Bengaluru. My work moves between editing a frame, shaping a brand moment, and building the interface that carries it. I care about clear communication, useful details, and making things people want to spend time with.</p>
              <a className="text-link" href="#contact-form">Get in touch <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-heading">
          <p className="eyebrow">Have a project in mind?</p>
          <h2 id="contact-heading">Let’s make something<br /><em>good together.</em></h2>
          <a className="contact-link" href="#contact-form">Get in touch <ArrowIcon /></a>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Lohith D</span>
        <div><a className="footer-drive" href={linkedinUrl} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a><a className="footer-drive" href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a><a className="footer-drive" href={driveUrl} target="_blank" rel="noreferrer"><DriveIcon /> Drive</a><a href={resumePdf} target="_blank" rel="noreferrer">Resume</a><a href="tel:+918431761728">+91 84317 61728</a></div>
      </footer>
    </div>
  );
}

function CreativeApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [contactPage, setContactPage] = useState(window.location.hash === '#contact-form');

  useEffect(() => {
    const tiltCards = [...document.querySelectorAll('[data-tilt]')];
    const handlers = tiltCards.map((card) => {
      const move = (event) => { const rect = card.getBoundingClientRect(); const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -6; const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 6; card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`; };
      const leave = () => { card.style.transform = ''; };
      card.addEventListener('pointermove', move); card.addEventListener('pointerleave', leave);
      return () => { card.removeEventListener('pointermove', move); card.removeEventListener('pointerleave', leave); };
    });
    return () => handlers.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    const handleHashChange = () => setContactPage(window.location.hash === '#contact-form');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (contactPage) return <ContactPage />;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="creative-shell">
      <CanvasBackdrop />
      <header className="creative-nav">
        <a className="creative-logo" href="#top" onClick={closeMenu}>LD<span>_</span></a>
        <span className="nav-status"><i /> Available for opportunities</span>
        <button className="creative-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="creative-navigation">{menuOpen ? 'Close' : 'Menu'} <b>{menuOpen ? '×' : '↗'}</b></button>
        <nav id="creative-navigation" className={menuOpen ? 'creative-links is-open' : 'creative-links'}>
          <a href="#work" onClick={closeMenu}>01 / Work</a><a href="#about" onClick={closeMenu}>02 / About</a><a href="#skills" onClick={closeMenu}>03 / Skills</a><a href="#experience" onClick={closeMenu}>04 / Experience</a><a href={resumePdf} target="_blank" rel="noreferrer" onClick={closeMenu}>05 / Resume</a><a href="#contact" onClick={closeMenu}>06 / Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="creative-hero">
          <div className="hero-kicker"><span>Creative developer / 2026</span><span>Based in Bengaluru, India</span></div>
          <div className="hero-grid"><div><p className="hero-label">Designing the feeling between <span>the frame</span> and the interface.</p><h1>Lohith <em>D.</em></h1><p className="hero-title">UI/UX designer, content creator<br />&amp; editor.</p></div><div className="hero-portrait"><img src={heroPortrait} alt="Lohith D outdoors" /></div></div>
          <div className="hero-bottom"><p>Visual systems, moving images,<br />and interfaces with a pulse.</p><div className="hero-cta-row"><a className="neon-button" href="#work">Explore work <ArrowIcon /></a><a className="ghost-button" href={resumePdf} target="_blank" rel="noreferrer">View resume <ArrowIcon /></a></div></div>
        </section>

        <section className="creative-section work-section" id="work"><div className="section-intro"><span className="section-index">01 / SELECTED WORK</span><h2>Built to be<br /><em>felt.</em></h2><p>Selected work across creative media, frontend design, and systems thinking.</p></div><div className="creative-project-grid">{projects.map((project, index) => <article className={`creative-project project-${index + 1}`} data-tilt key={project.number}><div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div><div className="project-poster"><span className="poster-grid">{project.visualLabel}</span><strong>{project.title}</strong><i>{index === 0 ? 'MEDIA' : index === 1 ? 'API' : 'SYSTEM'}</i></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><button onClick={() => setActiveProject(project)} aria-label={`View ${project.title} details`}>↗</button></div></article>)}</div></section>

        <section className="creative-section about-section" id="about"><div className="section-intro"><span className="section-index">02 / THE PERSON</span><h2>More than<br /><em>a title.</em></h2></div><div className="about-bento"><div className="about-copy"><span className="bento-tag">LOHITH D / 2026</span><p>I work across the space where visual storytelling meets digital craft. From a cut of music to a considered interaction, I like making work that feels clear, curious, and alive.</p><a href="#contact">Let’s make something <ArrowIcon /></a></div><div className="about-stat"><strong>30<span>+</span></strong><span>promotional videos,<br />reels &amp; creatives</span></div><div className="about-photo"><img src={portraitImage} alt="Lohith D smiling" loading="lazy" /><span>Based in<br />Bengaluru ↗</span></div></div></section>

        <section className="creative-section skills-section" id="skills"><div className="section-intro"><span className="section-index">03 / THE TOOLKIT</span><h2>Tools for<br /><em>the next frame.</em></h2></div><div className="creative-skills">{skills.map((skill) => <div className="creative-skill" data-tilt key={skill.name}><div className={`creative-app-icon ${skill.className}`}><span>{skill.shortName}</span></div><div><h3>{skill.name}</h3><p>{skill.group} / CREATIVE STACK</p></div><span className="skill-arrow">↗</span></div>)}</div></section>

        <section className="creative-section experience-section" id="experience"><div className="section-intro"><span className="section-index">04 / EXPERIENCE</span><h2>In the<br /><em>field.</em></h2></div><div className="creative-timeline"><div className="timeline-row"><span>2024—25</span><div><h3>Creative Media Editor &amp; Program Coordinator</h3><p>BGS College · MBA Department</p></div><p>Video, social content, posters, branding, and event materials across an 11-month engagement.</p></div><div className="timeline-row"><span>2025</span><div><h3>Frontend Developer Intern</h3><p>Doctor Java Technologies</p></div><p>Built Meal Finder, a responsive recipe discovery experience powered by live API data.</p></div></div></section>

        <section className="creative-contact" id="contact"><span className="section-index">05 / START A PROJECT</span><h2>Have a good<br /><em>idea?</em></h2><p>Let’s give it a sharp point of view.</p><div className="contact-actions"><a className="neon-button" href="#contact-form">Get in touch <ArrowIcon /></a></div><div className="contact-links"><a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a></div></section>
      </main>
      <footer className="creative-footer"><span>© {new Date().getFullYear()} Lohith D</span><span>Made with intention / Bengaluru</span><a href="mailto:happydeath2004@gmail.com">happydeath2004@gmail.com ↗</a></footer>
      {activeProject && <div className="creative-modal-backdrop" onClick={() => setActiveProject(null)}><section className={`creative-modal project-${activeProject.number}`} onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="creative-modal-title"><button onClick={() => setActiveProject(null)} aria-label="Close project details">×</button><span className="section-index">CASE STUDY / {activeProject.number}</span><h2 id="creative-modal-title">{activeProject.title}</h2><p>{activeProject.details}</p><strong>{activeProject.tools}</strong></section></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<CreativeApp />);
