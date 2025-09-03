import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'coLiver – Property & Room Booking Platform',
      description: 'Developed a responsive web platform for property listings and bookings. Built with React, Tailwind CSS, and Firebase. Implemented landlord dashboard and tenant booking system with payment integration.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Payment Integration'],
      liveUrl: 'https://earnest-maamoul-0015ec.netlify.app/Landing/Home',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'appSoapro - Build Your Dreams',
      description: 'Developed a full-stack platform for construction project management. Features: Super Admin Dashboard, team assignments, blueprint uploads. Tech: React, Express.js, MongoDB | Hosted on Vercel & Railway.com.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['React', 'Express.js', 'MongoDB', 'Vercel', 'Railway'],
      liveUrl: 'https://appsoapro.serveng.ao/login',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Notes Management App',
      description: 'Built a full-stack notes application using the MERN Stack. Implemented user authentication with JWT. Created a rich text editor for creating and editing notes. Added sorting and filtering features for better organization.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['MERN Stack', 'JWT', 'Rich Text Editor', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'ServiSmart - Car Wash Service',
      description: 'Developed a full-stack car wash service booking platform using Express.js for Backend and Next.js for Frontend. Implemented user authentication, booking system, and admin dashboard. Created responsive UI with Next.js and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['Next.js', 'Express.js', 'Tailwind CSS', 'Admin Dashboard'],
      liveUrl: 'https://servi-smart-jk8p.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Smuves - HubSpot Backup',
      description: 'Next.js 14 Dashboard built with Server Components, Server Actions, and React Hooks for fast, dynamic UX. Supabase Backend with scalable PostgreSQL schema, RLS and secure Auth. HubSpot Integration with OAuth 2.0 and real-time data sync.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      category: 'web',
      technologies: ['Next.js 14', 'Supabase', 'PostgreSQL', 'HubSpot API', 'OAuth 2.0'],
      liveUrl: 'https://hubspot-mass-vkk4.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      id: 6,
      title: 'AI-Powered E-commerce Platform',
      description: 'A modern e-commerce solution with AI-driven product recommendations, automated inventory management, and intelligent pricing strategies.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      category: 'ai',
      technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 7,
      title: 'n8n Workflow Automation',
      description: 'Custom automation workflows for business processes including lead generation, customer support, and data synchronization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'ai',
      technologies: ['n8n', 'API Integration', 'Webhooks', 'Database'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 8,
      title: 'SEO Performance Dashboard',
      description: 'Comprehensive SEO analytics platform with real-time monitoring, keyword tracking, and performance insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      category: 'seo',
      technologies: ['React', 'Google Analytics API', 'SEO Tools', 'Charts.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'ai', label: 'AI & Automation' },
    { key: 'seo', label: 'SEO & Marketing' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my expertise in different domains.
        </p>
        
        <div className="filter-container">
          <Filter size={20} />
          <div className="filter-buttons">
            {filters.map(filter => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.liveUrl} className="action-btn" title="View Live" target="_blank" rel="noopener noreferrer">
                      <Eye size={20} />
                    </a>
                    {project.githubUrl !== '#' && (
                      <a href={project.githubUrl} className="action-btn" title="View Code" target="_blank" rel="noopener noreferrer">
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Interested in working together?</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Let's Discuss Your Project
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
