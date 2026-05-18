import React, { useEffect, useRef } from 'react';
import { Code, Database, GitBranch, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    id: 'frontend',
    label: 'FRONTEND',
    title: 'React & Next.js Development',
    icon: <Code size={36} />,
    color: '#667eea',
    description:
      'Building high-performance, pixel-perfect UIs with React.js and Next.js — from SSR dashboards to dynamic SPAs. Responsive, accessible, and production-ready.',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux Toolkit', 'HTML5 / CSS3'],
  },
  {
    id: 'backend',
    label: 'BACKEND',
    title: 'Node.js & REST API Architecture',
    icon: <Database size={36} />,
    color: '#ff6b6b',
    description:
      'Designing and building robust, scalable REST APIs with Node.js and Express.js. JWT / OAuth 2.0 auth, third-party integrations, and full server-side data management.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'OAuth 2.0', 'HubSpot API', 'Supabase'],
  },
  {
    id: 'database',
    label: 'DATABASE',
    title: 'MongoDB & Data Management',
    icon: <Layers size={36} />,
    color: '#4ecdc4',
    description:
      'Designing efficient schemas, managing complex queries, and scaling data layers for production applications across MongoDB, PostgreSQL, and Firebase.',
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Firebase', 'Supabase', 'Data Modeling', 'Aggregation Pipelines'],
  },
  {
    id: 'tools',
    label: 'TOOLS & WORKFLOW',
    title: 'Dev Tools & Best Practices',
    icon: <GitBranch size={36} />,
    color: '#c2a4ff',
    description:
      'Using industry-standard tools and workflows to ship clean, maintainable code. Comfortable with version control, deployment, and cross-team collaboration.',
    skills: ['Git / GitHub', 'Vercel', 'Railway', 'Netlify', 'Postman', 'VS Code', 'Agile / Scrum'],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(el.querySelector('.skills-what-title'),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(el.querySelectorAll('.skill-interactive-card'),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, delay: 0.3, ease: 'power2.out', clearProps: 'all' }
          );
          gsap.fromTo(el.querySelectorAll('.tool-item'),
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, delay: 0.6, ease: 'power2.out', clearProps: 'all' }
          );
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const handleCardHover = (index) => {
    if (window.innerWidth > 768) {
      gsap.to(`.skill-interactive-card:nth-child(${index + 1}) .skill-card-expand`, {
        height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out'
      });
    }
  };

  return (
    <section id="skills" className="section skills" ref={sectionRef}>
      <div className="container">
        {/* Section heading */}
        <div className="skills-what-header">
          <div>
            <h2 className="skills-what-title">
              MY <span className="skills-accent">SKILLS</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', maxWidth: 500, margin: 0, marginTop: '1rem' }}>
              Creating innovative solutions that combine cutting-edge technology
              with practical business needs — web, AI, and security.
            </p>
          </div>
        </div>

        {/* Interactive skill cards */}
        <div className="skills-interactive-grid">
          {skillCategories.map((cat, i) => (
            <div
              className="skill-interactive-card"
              key={cat.id}
              style={{ '--card-accent': cat.color }}
              onMouseEnter={() => handleCardHover(i)}
            >
              {/* Corner brackets — WhatIDo style */}
              <div className="card-corner tl"></div>
              <div className="card-corner tr"></div>
              <div className="card-corner bl"></div>
              <div className="card-corner br"></div>

              <div className="skill-card-header">
                <div className="skill-card-icon" style={{ color: cat.color }}>{cat.icon}</div>
                <div>
                  <span className="skill-card-label">{cat.label}</span>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>
              </div>

              <p className="skill-card-desc">{cat.description}</p>

              <div className="skill-tags-row">
                {cat.skills.map((s) => (
                  <span className="what-tags" key={s}>{s}</span>
                ))}
              </div>

              <div className="skill-card-bar">
                <div className="skill-card-bar-fill" style={{ background: cat.color }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional tools row */}
        <div className="additional-skills">
          <h3>Also Familiar With</h3>
          <div className="tools-grid">
            {[
              { icon: <Code size={22}/>, label: 'TypeScript' },
              { icon: <Database size={22}/>, label: 'GraphQL' },
              { icon: <GitBranch size={22}/>, label: 'Git & GitHub' },
              { icon: <Layers size={22}/>, label: 'Docker Basics' },
              { icon: <Code size={22}/>, label: 'Socket.io' },
              { icon: <Database size={22}/>, label: 'Redis' },
            ].map((t, i) => (
              <div className="tool-item" key={i}>
                {t.icon}
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
