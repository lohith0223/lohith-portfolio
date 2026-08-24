import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import portraitImage from './assets/lohith-portrait.jpg';
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
    details: 'Created promotional videos, reels, posters, social media creatives, and event materials that strengthened the department’s digital engagement.'
  },
  {
    number: '02',
    title: 'Meal Finder',
    category: 'Frontend project · 2025',
    accent: 'citrus',
    description: 'A responsive meal discovery experience with search, filters, recipe details, and live API data.',
    role: 'Frontend Developer Intern · Doctor Java Technologies',
    tools: 'HTML, CSS, JavaScript, REST API',
    details: 'Built an interactive meal discovery site with real-time API data, keyword search, category filters, recipe details, and a responsive interface.'
  },
  {
    number: '03',
    title: 'Library System',
    category: 'Full-stack project',
    accent: 'coral',
    description: 'A Django and MySQL library platform with secure roles, book tracking, and smart search.',
    role: 'Final Year Project',
    tools: 'Python, Django, MySQL, JavaScript, jQuery',
    details: 'Developed separate student and admin modules with secure sign-in, book management, issue and return tracking, fine calculation, and real-time search.'
  }
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

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const projectType = formData.get('projectType');
    const message = formData.get('message');
    const subject = `Project enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nAbout the work:\n${message}`;

    window.location.href = `mailto:happydeath2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
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
        <form className="brief-form" onSubmit={handleSubmit}>
          <label>What’s your name<input name="name" type="text" placeholder="Your name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>What do you need help with?<select name="projectType" defaultValue="" required><option value="" disabled>Select a project type</option><option>Video editing & motion</option><option>Branding & social content</option><option>Frontend development</option><option>Something else</option></select></label>
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

  useEffect(() => {
    const handleHashChange = () => setContactPage(window.location.hash === '#contact-form');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (contactPage) return <ContactPage />;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient-bg" aria-hidden="true"><span className="orb orb-one"></span><span className="orb orb-two"></span><span className="orb orb-three"></span><span className="grid-noise"></span></div>
      <header className="topbar">
        <a className="logo" href="#top" onClick={closeMenu} aria-label="Lohith D home">LD<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation">
          <span></span><span></span>
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="navigation" className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a className="nav-drive" href={driveUrl} target="_blank" rel="noreferrer" onClick={closeMenu}><DriveIcon /> Drive</a>
          <a className="nav-social" href={linkedinUrl} target="_blank" rel="noreferrer" onClick={closeMenu}><LinkedInIcon /> LinkedIn</a>
          <a className="nav-social" href={instagramUrl} target="_blank" rel="noreferrer" onClick={closeMenu}><InstagramIcon /> Instagram</a>
          <a href={resumePdf} target="_blank" rel="noreferrer" onClick={closeMenu}>Resume</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact-form" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="intro-heading">
          <div className="hero-meta"><p className="eyebrow">Creative media editor & frontend developer</p><span className="availability"><i></i> Available for opportunities</span></div>
          <h1 id="intro-heading">I turn ideas into<br /><em>stories</em> that move.</h1>
          <div className="hero-footer">
            <p>Based in Bengaluru, Karnataka.<br />Available for creative collaborations.</p>
            <div className="hero-actions">
              <a className="drive-button" href={driveUrl} target="_blank" rel="noreferrer"><DriveIcon /> View work on Drive</a>
              <a className="circle-link" href="#work" aria-label="Jump to selected work"><ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="work section" id="work" aria-labelledby="work-heading">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">Creative work,<br />made to connect.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.number}>
                <div className="card-top"><span>{project.number}</span><span>{project.category}</span></div>
                <div className="project-art" aria-hidden="true">
                  <div className="art-shape shape-one"></div>
                  <div className="art-shape shape-two"></div>
                  <div className="art-word">{project.title.split(' ')[0]}</div>
                </div>
                <div className="card-bottom">
                  <div><h3>{project.title}</h3><p>{project.description}</p></div>
                  <button className="project-arrow" onClick={() => setActiveProject(project)} aria-label={`View ${project.title} details`} aria-haspopup="dialog"><ArrowIcon /></button>
                </div>
              </article>
            ))}
          </div>
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
            <div className="portrait photo"><img src={portraitImage} alt="Lohith D smiling" /></div>
            <div>
              <h2 id="about-heading">Visual storyteller, maker, and detail-led problem solver.</h2>
              <p className="body-copy">I’m Lohith, a BCA graduate who works across video editing, motion graphics, branding, and frontend development. I enjoy combining creativity and technology to make digital experiences that are clear, engaging, and useful.</p>
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

createRoot(document.getElementById('root')).render(<App />);
