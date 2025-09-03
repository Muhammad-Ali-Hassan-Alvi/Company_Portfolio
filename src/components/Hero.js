import React, { useState, useEffect, useMemo } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    'Full Stack Developer',
    'AI Specialist',
    'Automation Expert',
    'Cyber Security Enthusiast'
  ], []);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isDeleting) {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isDeleting, currentTextIndex, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-particles"></div>
        <div className="hero-particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Muhammad Ali Hassan</span>
            </h1>
            
            <div className="hero-subtitle">
              I'm a <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              Passionate about creating innovative solutions that combine cutting-edge technology 
              with practical business needs. Specializing in web development, AI automation, 
              and cybersecurity.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight size={20} />
              </button>
              
              <button className="btn btn-secondary">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <h3>Innovation</h3>
                <p>Cutting-edge solutions</p>
              </div>
            </div>
            
            <div className="hero-card floating">
              <div className="card-content">
                <div className="card-icon">⚡</div>
                <h3>Speed</h3>
                <p>Fast & efficient</p>
              </div>
            </div>
            
            <div className="hero-card">
              <div className="card-content">
                <div className="card-icon">🛡️</div>
                <h3>Security</h3>
                <p>Safe & reliable</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="social-link">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
