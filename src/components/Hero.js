import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import './Hero.css';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef(null);

  const texts = useMemo(() => [
    'Full Stack Developer',
    'MERN Stack Developer',
    'React & Node.js Expert',
    'Problem Solver',
  ], []);

  /* — Typewriter — */
  useEffect(() => {
    const currentText = texts[currentTextIndex];
    if (isDeleting) {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 80);
        return () => clearTimeout(t);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((p) => (p + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        const t = setTimeout(() => setDisplayText(currentText.slice(0, displayText.length + 1)), 120);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsDeleting(true), 2200);
        return () => clearTimeout(t);
      }
    }
  }, [displayText, isDeleting, currentTextIndex, texts]);

  /* — GSAP entrance animation — */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'all' } });
      tl.fromTo('.hero-badge',       { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
        .fromTo('.hero-title',       { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.3')
        .fromTo('.hero-subtitle',    { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5')
        .fromTo('.hero-description', { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.4')
        .fromTo('.hero-buttons',     { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-stats',       { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-social',      { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-card',        { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.7 }, '-=0.6');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Ambient glow orbs — ported from Portfolio-Website */}
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-particles"></div>
        <div className="hero-particles"></div>
        {/* Rotating landing circles */}
        <div className="hero-circle1"></div>
        <div className="hero-circle2"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* ——— Left: text ——— */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              Available for new projects
            </div>

            <h1 className="hero-title">
              Hi, I'm{' '}
              <span className="highlight">Muhammad<br />Ali Hassan</span>
            </h1>

            <div className="hero-subtitle">
              I'm a{' '}
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>

            <p className="hero-description">
              Passionate about building fast, scalable web applications and intelligent
              automation systems. I turn ideas into production-ready products using the
              latest tech — from full-stack apps to AI-powered workflows.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('projects')} data-cursor="disable">
                View My Work
                <ArrowRight size={18} />
              </button>
              <a href="/AliHassan-Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary" data-cursor="disable">
                <Download size={18} />
                Resume
              </a>
            </div>

            <div className="hero-stats">
              {[
                { val: '4+', label: 'Years Exp.' },
                { val: '20+', label: 'Projects' },
                { val: '100%', label: 'Dedication' },
              ].map((s, i) => (
                <div className="hero-stat-item" key={i}>
                  <span className="hero-stat-val">{s.val}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-social">
              <a href="https://github.com/geniuscoder519" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor="disable">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ali-hassan-dev" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor="disable">
                <Linkedin size={22} />
              </a>
              <a href="mailto:muhammadalialvi646@gmail.com" className="social-link" data-cursor="disable">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* ——— Right: floating cards ——— */}
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <h3>Full Stack</h3>
                <p>React · Node · MongoDB</p>
              </div>
            </div>
            <div className="hero-card floating">
              <div className="card-content">
                <div className="card-icon">🤖</div>
                <h3>AI & Automation</h3>
                <p>n8n · OpenAI · Make.com</p>
              </div>
            </div>
            <div className="hero-card">
              <div className="card-content">
                <div className="card-icon">📈</div>
                <h3>SEO & Growth</h3>
                <p>Rankings · Traffic · Analytics</p>
              </div>
            </div>
            <div className="hero-card floating" style={{ animationDelay: '2s' }}>
              <div className="card-content">
                <div className="card-icon">⚡</div>
                <h3>Performance</h3>
                <p>Fast · Scalable · Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
