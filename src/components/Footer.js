import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">MAH</span>
              <span className="logo-subtitle">Portfolio</span>
            </div>
            <p>
              Full-stack developer and AI specialist passionate about creating 
              innovative solutions that drive business growth.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>AI & Automation</li>
              <li>SEO & Marketing</li>
              <li>Cyber Security</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; {currentYear} Muhammad Ali Hassan. All rights reserved.</p>
            <p>Built with ❤️ using React.js</p>
          </div>
          
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
