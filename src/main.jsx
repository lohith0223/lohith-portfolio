import { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import portraitImage from './assets/lohith-portrait.jpg';
import heroPortrait from './assets/20251020_064102.jpg.jpeg';
import resumePdf from './assets/Lohith D Resume.pdf';
import skillVideoImage from './assets/skill-video.jpg';
import skillDesignImage from './assets/skill-design.jpg';
import skillDevelopmentImage from './assets/skill-development.jpg';
import skillCreativeImage from './assets/skill-creative.jpg';

const linkedinUrl = 'https://www.linkedin.com/in/lohithd';
const instagramUrl = 'https://www.instagram.com/_.lohith._02?igsi=dXAwNGF0bWNjczB0';

const skillGroups = [
  {
    icon: '🎬',
    title: 'Video',
    skills: ['Premiere Pro', 'After Effects', 'CapCut'],
    accent: 'cyan',
    image: skillVideoImage
  },
  {
    icon: '🎨',
    title: 'Design',
    skills: ['Illustrator', 'Canva', 'Lightroom'],
    accent: 'violet',
    image: skillDesignImage
  },
  {
    icon: '💻',
    title: 'Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'MySQL'],
    accent: 'amber',
    image: skillDevelopmentImage
  },
  {
    icon: '🚀',
    title: 'Creative',
    skills: ['Motion Graphics', 'Branding', 'Content Creation', 'Photography', 'Videography', 'Event Coordination'],
    accent: 'rose',
    image: skillCreativeImage
  }
];

const experience = [
  {
    period: '2025 — 2026',
    role: 'Creative Media Editor & Program Coordinator',
    company: 'BGS College of Engineering and Technology · MBA Department',
    description: 'Edited 30+ promotional videos, reels and branding assets while managing promotional activities, event coordination and creative campaigns.',
    image: skillCreativeImage
  },
  {
    period: '2025',
    role: 'Frontend Developer Intern',
    company: 'Doctor Java Technologies',
    description: 'Developed a responsive Meal Finder website with live API integration, search, filters and recipe detail experiences.',
    image: skillDevelopmentImage
  }
];

const projects = [
  {
    id: '01',
    title: 'Online Library Management System',
    tags: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    summary: 'A complete library platform with secure admin/student roles, book management, issue/return tracking, fine calculation, and smart search.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=85',
    details: [
      'Role-based authentication for admin and student users.',
      'Book catalog management, issue and return workflows, notifications and fine tracking.',
      'Search-based discovery with dashboard views built for clarity and accessibility.'
    ],
    accent: 'cyan'
  },
  {
    id: '02',
    title: 'Meal Finder Website',
    tags: ['API Integration', 'Responsive UI', 'JavaScript', 'Search & Filters'],
    summary: 'A clean, responsive meal discovery experience designed around search, filtering and recipe exploration.',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=85',
    details: [
      'Live recipe data integration with category-based filtering.',
      'Responsive layout and detail cards built for mobile-first browsing.',
      'Improved user flow for discovering meals, ingredients and cooking inspiration.'
    ],
    accent: 'violet'
  }
];

const gallery = [
  {
    label: 'Reels',
    title: 'Motion stories',
    tone: 'cyan',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=85'
  },
  {
    label: 'Branding',
    title: 'Campaign visuals',
    tone: 'violet',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1000&q=85'
  },
  {
    label: 'Photography',
    title: 'Frames from life',
    tone: 'amber',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1000&q=85'
  }
];

const certifications = [
  'Bachelor of Computer Applications (BCA) — BGS Institute of Management, Bangalore University — CGPA 8.04',
  'Pre-University Education — BGS PU College, Magadi',
  'High School — Sri Maruthi Public School, Magadi',
  'Data Science Certification',
  'Web Full-Stack Development — Doctor Java Technologies'
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.3 8.4v9.3M6.3 5.8v.1M10.4 17.7v-5.4c0-1.7 1-2.8 2.5-2.8s2.4 1.1 2.4 2.8v5.4M10.4 11.8c.4-1.4 1.5-2.3 3.1-2.3 2.2 0 3.6 1.5 3.6 4.2v4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.6 6.7h.01" />
    </svg>
  );
}

function DropletBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const droplets = [];
    const dropletColors = ['#415a77', '#ff5d5d', '#e0e1dd', '#1b263b'];
    let animationFrame;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const createDroplet = (initial = false) => ({
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + 12,
      radius: 1.8 + Math.random() * 2.1,
      vx: (Math.random() - 0.5) * 0.34,
      vy: -(0.28 + Math.random() * 0.42),
      colorOffset: Math.random() * dropletColors.length,
      colorSpeed: 0.16 + Math.random() * 0.14
    });

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const resolveCollisions = () => {
      for (let index = 0; index < droplets.length; index += 1) {
        for (let otherIndex = index + 1; otherIndex < droplets.length; otherIndex += 1) {
          const droplet = droplets[index];
          const other = droplets[otherIndex];
          const dx = other.x - droplet.x;
          const dy = other.y - droplet.y;
          const distance = Math.hypot(dx, dy);
          const minimumDistance = droplet.radius + other.radius;

          if (distance > 0 && distance < minimumDistance) {
            const normalX = dx / distance;
            const normalY = dy / distance;
            const relativeVelocityX = other.vx - droplet.vx;
            const relativeVelocityY = other.vy - droplet.vy;
            const velocityAlongNormal = relativeVelocityX * normalX + relativeVelocityY * normalY;

            if (velocityAlongNormal < 0) {
              const impulse = velocityAlongNormal * 0.9;
              droplet.vx += impulse * normalX;
              droplet.vy += impulse * normalY;
              other.vx -= impulse * normalX;
              other.vy -= impulse * normalY;
            }

            const separation = (minimumDistance - distance) / 2;
            droplet.x -= normalX * separation;
            droplet.y -= normalY * separation;
            other.x += normalX * separation;
            other.y += normalY * separation;
          }
        }
      }
    };

    const animate = (time) => {
      context.clearRect(0, 0, width, height);

      droplets.forEach((droplet) => {
        droplet.x += droplet.vx;
        droplet.y += droplet.vy;

        if (droplet.x < droplet.radius || droplet.x > width - droplet.radius) {
          droplet.vx *= -1;
          droplet.x = Math.max(droplet.radius, Math.min(width - droplet.radius, droplet.x));
        }

        if (droplet.y < -droplet.radius - 8) {
          droplet.y = height + droplet.radius + Math.random() * 30;
          droplet.x = Math.random() * width;
        }

        const colorIndex = Math.floor(droplet.colorOffset + time * 0.001 * droplet.colorSpeed) % dropletColors.length;
        context.fillStyle = dropletColors[colorIndex];
        context.shadowColor = dropletColors[colorIndex];
        context.shadowBlur = 7;
        context.globalAlpha = 0.62;
        context.beginPath();
        context.arc(droplet.x, droplet.y, droplet.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      resolveCollisions();
      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    for (let index = 0; index < 34; index += 1) {
      droplets.push(createDroplet(true));
    }
    window.addEventListener('resize', resize);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="droplet-canvas" aria-hidden="true" />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const topLinks = useMemo(
    () => [
      { label: 'Work', href: '#work' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Contact', href: '#contact' }
    ],
    []
  );

  useEffect(() => {
    const root = document.documentElement;
    const handlePointerMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 18;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      root.style.setProperty('--pointer-x', `${x}px`);
      root.style.setProperty('--pointer-y', `${y}px`);
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="portfolio-shell">
      <DropletBackground />
      <div className="ambient-glow" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href="#top" aria-label="Lohith D home">
          LD<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span>Menu</span>
          <span className="chevron">⌄</span>
        </button>

        <nav id="main-nav" className={menuOpen ? 'main-nav open' : 'main-nav'}>
          {topLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={resumePdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>
      </header>

      <main id="top" className="page-shell">
        <section className="hero section-block">
          <div className="hero-badges">
            <span className="eyebrow">Bengaluru, Karnataka</span>
            <span className="status-pill">
              <i /> Available for opportunities
            </span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">Creative Media Editor | Video Editor | Frontend Developer | Digital Creator</p>
              <h1>
                LOHITH D
                <span>
                  I Create. I Edit. I Build. <em>I Tell Stories.</em>
                </span>
              </h1>
              <p className="hero-summary">
                I’m a creative and detail-oriented BCA graduate combining technology, visual storytelling,
                branding, and digital marketing to craft work that connects with people.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  View work <ArrowIcon />
                </a>
                <a className="secondary-button" href={resumePdf} target="_blank" rel="noreferrer">
                  Download resume <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Portrait of Lohith D">
              <div className="hero-portrait-wrap">
                <img className="hero-portrait" src={heroPortrait} alt="Lohith D outdoors" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section-block">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>
              Visual storyteller,<br />
              maker, and builder.
            </h2>
          </div>

          <div className="about-grid">
            <div className="portrait-card">
              <img src={portraitImage} alt="Lohith D smiling" loading="lazy" />
            </div>

            <div className="about-copy">
              <p>
                I’m Lohith, a BCA graduate with a strong eye for visual storytelling, performance-driven content,
                and meaningful digital experiences. My work sits at the intersection of video editing, branding,
                frontend development, and creative coordination—built to be useful, memorable, and polished.
              </p>
              <p>
                From editing promotional videos and reels to crafting frontend experiences, I enjoy turning ideas into
                clean, engaging content that looks sharp and works beautifully across screens.
              </p>
              <a href="#contact" className="text-link">
                Get in touch <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-block">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>
              Built for<br />
              motion, design, and code.
            </h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className={`skill-card ${group.accent}`}>
                <img className="skill-image" src={group.image} alt={`${group.title} skill visual`} loading="lazy" />
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="experience section-block">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>
              Creative work, <br />
              with momentum.
            </h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={item.role}>
                <div className="timeline-meta">
                  <span className="timeline-period">{item.period}</span>
                  <img className="timeline-image" src={item.image} alt={`${item.role} creative work`} loading="lazy" />
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="work section-block">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>
              Case studies<br />
              worth the click.
            </h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.id} className={`project-card ${project.accent}`}>
                <div className="project-header">
                  <span>{project.id}</span>
                  <span>Project</span>
                </div>
                <div className="project-visual">
                  <img className="project-image" src={project.image} alt={`${project.title} preview`} loading="lazy" />
                  <span>{project.id}</span>
                  <strong>{project.title}</strong>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="playground section-block">
          <div className="section-heading">
            <p className="eyebrow">Visual Playground</p>
            <h2>
              Cinematic work,<br />
              made to stop the scroll.
            </h2>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <article key={item.label} className={`gallery-card ${item.tone}`}>
                <img className="gallery-image" src={item.image} alt={`${item.title} visual`} loading="lazy" />
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="credentials section-block">
          <div className="section-heading">
            <p className="eyebrow">Education & Certifications</p>
            <h2>
              Learning with<br />
              substance and style.
            </h2>
          </div>

          <div className="credential-panel">
            <div className="credential-list">
              {certifications.map((item) => (
                <div key={item} className="credential-item">
                  <span>✦</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section-block">
          <div className="contact-inner">
            <div className="contact-copy">
              <p className="eyebrow">Have a project in mind?</p>
              <h2>
                Have an idea?<br />
                <em>Let’s create something worth watching.</em>
              </h2>
              <div className="contact-links">
                <a href={`mailto:happydeath2004@gmail.com`}>happydeath2004@gmail.com</a>
                <a href="tel:+918431761728">+91 84317 61728</a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="contact-form" action="https://formsubmit.co/happydeath2004@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="Portfolio enquiry from Lohith D website" />
              <input type="hidden" name="_captcha" value="false" />
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                Project type
                <select name="projectType" defaultValue="" required>
                  <option value="" disabled>Choose one</option>
                  <option>Video editing</option>
                  <option>Photography</option>
                  <option>Branding / social content</option>
                  <option>Frontend development</option>
                  <option>Creative collaboration</option>
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Tell me about your idea" required />
              </label>
              <button type="submit" className="primary-button submit-button">
                Send enquiry <ArrowIcon />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Lohith D</p>
        <div className="footer-links">
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon /> Instagram
          </a>
          <a href={resumePdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </footer>

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
