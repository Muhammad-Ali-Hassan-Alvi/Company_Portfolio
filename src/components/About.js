import React, { useEffect, useRef } from 'react';
import { Download, Briefcase, GraduationCap, Code, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
          gsap.fromTo(
            el.querySelectorAll('.about-label, .about-headline, .about-para'),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            el.querySelectorAll('.about-card'),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, delay: 0.3, ease: 'power3.out', clearProps: 'all' }
          );
          gsap.fromTo(
            el.querySelectorAll('.exp-item'),
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, delay: 0.4, ease: 'power2.out', clearProps: 'all' }
          );
          gsap.fromTo(
            el.querySelectorAll('.cert-item'),
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, delay: 0.5, ease: 'power2.out', clearProps: 'all' }
          );
        },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: 'Full-Stack Developer',
      company: 'Freelance / Upwork',
      period: '2021 – Present',
      desc: 'Built 20+ production web apps using React, Next.js, Node.js, Express.js, and MongoDB for international clients across fintech, SaaS, booking, and analytics domains.',
    },
    {
      role: 'MERN Stack Developer',
      company: 'Remote Contracts',
      period: '2022 – Present',
      desc: 'Delivered full-stack platforms with HubSpot integrations, Supabase backends, OAuth 2.0 auth flows, and real-time APIs for global clients.',
    },
    {
      role: 'Junior Web Developer',
      company: 'Tech Company',
      period: '2021',
      desc: 'Gained hands-on experience with the MERN stack, REST API design, and agile development workflows in a professional environment.',
    },
  ];

  const certifications = [
    { title: 'BS Computer Science', org: 'University — 2021–2025', badge: 'DEGREE' },
    { title: 'Next.js & TypeScript', org: 'Udemy — Completed', badge: 'FRONTEND' },
    { title: 'Node.js Backend Mastery', org: 'Udemy — Completed', badge: 'BACKEND' },
    { title: 'AI & Automation with n8n', org: 'Self Study — Completed', badge: 'AI' },
    { title: 'AWS Cloud Practitioner', org: 'Amazon — Study Phase', badge: 'CLOUD' },
  ];

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <span className="about-label">ABOUT ME</span>
        <h2 className="section-title about-headline">
          Who I Am &amp; <span>What I Do</span>
        </h2>
        <p className="section-subtitle about-para">
          Full-Stack MERN Developer with 4+ years of experience building scalable web applications
          — from SaaS dashboards and booking platforms to crypto trading tools and admin systems.
        </p>

        {/* Stats Cards */}
        <div className="about-cards">
          {[
            { icon: <Briefcase size={26}/>, val: '4+', label: 'Years Experience' },
            { icon: <Code size={26}/>,      val: '20+', label: 'Projects Delivered' },
            { icon: <Globe size={26}/>,     val: '10+', label: 'Happy Clients' },
            { icon: <GraduationCap size={26}/>, val: 'BS', label: 'Computer Science' },
          ].map((s, i) => (
            <div className="about-card" key={i}>
              <div className="about-card-icon">{s.icon}</div>
              <div className="about-card-val">{s.val}</div>
              <div className="about-card-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="about-two-col">
          {/* Experience */}
          <div>
            <h3 className="about-col-heading">
              <Briefcase size={16}/> Experience
            </h3>
            <div className="exp-list">
              {experiences.map((e, i) => (
                <div className="exp-item" key={i}>
                  <div className="exp-period">{e.period}</div>
                  <div className="exp-body">
                    <h4 className="exp-role">{e.role}</h4>
                    <p className="exp-company">{e.company}</p>
                    <p className="exp-desc">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h3 className="about-col-heading">
              <GraduationCap size={16}/> Education &amp; Certs
            </h3>
            <div className="cert-list">
              {certifications.map((c, i) => (
                <div className="cert-item" key={i}>
                  <span className="cert-badge">{c.badge}</span>
                  <div>
                    <h4 className="cert-title">{c.title}</h4>
                    <p className="cert-org">{c.org}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="/AliHassan-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                data-cursor="disable"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
