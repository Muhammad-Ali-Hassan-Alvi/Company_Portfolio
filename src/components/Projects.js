import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

/* Fallback gradient — used for projects without a screenshot */
const FALLBACK_GRADIENT = 'linear-gradient(135deg, #0d0626 0%, #1a0f4a 50%, #0d1230 100%)';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  /* ── Resume projects — real screenshots where available ── */
  const projects = [
    {
      id: 1,
      title: 'Buycex – Crypto Trading Platform',
      description:
        'Professional crypto trading platform with real-time market insights, user dashboards, and asset management. Built secure auth flows, scalable APIs, and a high-performance frontend.',
      category: 'web',
      image: '/projects/image.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      liveUrl: 'https://www.buycex.com/',
      featured: true,
    },
    {
      id: 2,
      title: 'Cricap – Cricket Analytics Platform',
      description:
        'Full-featured cricket platform delivering live scores, match analytics, and community engagement tools with real-time updates and optimized APIs.',
      category: 'web',
      image: '/projects/cricap.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Real-time APIs', 'Express.js'],
      liveUrl: 'https://web.cricap.com/',
      featured: true,
    },
    {
      id: 3,
      title: 'ServiSmart – Car Wash Booking',
      description:
        'Full-stack booking platform with user authentication, booking management, and an admin dashboard. Built with Next.js, Express.js, and a responsive Tailwind CSS UI.',
      category: 'web',
      image: '/projects/servismart.png',
      technologies: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Admin Dashboard'],
      liveUrl: 'https://servi-smart-jk8p.vercel.app/',
      featured: true,
    },
    {
      id: 4,
      title: 'Smuves – HubSpot Backup Dashboard',
      description:
        'Next.js 14 dashboard with Server Components, Supabase PostgreSQL backend, multi-method auth, and HubSpot OAuth 2.0 integration for real-time data sync.',
      category: 'web',
      image: '/projects/smuves.png',
      technologies: ['Next.js 14', 'Supabase', 'PostgreSQL', 'HubSpot API', 'OAuth 2.0'],
      liveUrl: 'https://earnest-maamoul-0015ec.netlify.app/',
      featured: true,
    },
    {
      id: 5,
      title: 'Construction Management Platform',
      description:
        'Full-stack platform for managing construction projects, teams, and blueprints. Super Admin dashboard, role-based access, and automated workflows.',
      category: 'web',
      image: '/projects/construction.png',
      technologies: ['React', 'Express.js', 'MongoDB', 'Role-Based Access', 'Railway'],
      liveUrl: 'https://appsoapro.techbytech.tech/',
      featured: false,
    },
    {
      id: 6,
      title: 'coLiver – Property & Room Booking',
      description:
        'Responsive property listing and booking platform with landlord dashboard, tenant booking system, and payment integration.',
      category: 'web',
      image: '/projects/coliver.png',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Payment Integration'],
      liveUrl: 'https://earnest-maamoul-0015ec.netlify.app/Landing/Home',
      featured: false,
    },
  ];

  /* GSAP entrance */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            el.querySelectorAll('.projects-headline, .section-subtitle'),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            el.querySelectorAll('.filter-btn'),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.07, duration: 0.6, delay: 0.3, ease: 'power2.out', clearProps: 'all' }
          );
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  /* Re-animate cards on filter change */
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.project-card');
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: 'power2.out', clearProps: 'all' }
    );
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title projects-headline">
          My <span>Work</span>
        </h2>
        <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0, maxWidth: 600 }}>
          Real-world production projects built with the MERN stack and modern web technologies.
        </p>

        {/* Filter — web only since all are web projects */}
        <div className="filter-container">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
            data-cursor="disable"
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
            data-cursor="disable"
          >
            Web Development
          </button>
        </div>

        {/* Grid */}
        <div className="projects-grid" ref={gridRef}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {/* Project cover — real screenshot or fallback gradient */}
              <div
                className="project-image"
                style={!project.image ? { background: FALLBACK_GRADIENT } : {}}
              >
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="project-image-icon">🏠</div>
                )}
                <div className="project-overlay">
                  <div className="project-actions">
                    {project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        className="action-btn"
                        title="View Live"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="disable"
                      >
                        <Eye size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-number">0{index + 1}</div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, ti) => (
                    <span key={ti} className="what-tags">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="disable"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            data-cursor="disable"
          >
            Let's Discuss Your Project
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
