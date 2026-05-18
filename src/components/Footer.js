import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-section', {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.footer', start: 'top 90%' }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer" ref={footerRef}>
      {/* Top glow line */}
      <div className="footer-glow"></div>

      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">MAH</span>
              <span className="logo-dot-footer"></span>
            </div>
            <p>
              Full-Stack MERN Developer crafting fast, scalable, and production-ready
              web applications using React, Node.js, and MongoDB.
            </p>
            <div className="footer-social">
              <a href="https://github.com/geniuscoder519" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor="disable">
                <Github size={18}/>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-ali-hassan-dev" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor="disable">
                <Linkedin size={18}/>
              </a>
              <a href="mailto:muhammadalialvi646@gmail.com" className="social-link" data-cursor="disable">
                <Mail size={18}/>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              {['hero','about','skills','projects','contact'].map(id => (
                <li key={id}>
                  <a href={`#${id}`}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>React & Next.js Development</li>
              <li>Node.js & REST APIs</li>
              <li>MongoDB & Database Design</li>
              <li>Full-Stack Web Apps</li>
              <li>Third-Party Integrations</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li><a href="mailto:muhammadalialvi646@gmail.com">muhammadalialvi646@gmail.com</a></li>
              <li>+92 309-7409806</li>
              <li>Pakistan (Remote Worldwide)</li>
            </ul>
            <div className="footer-availability-badge">
              🚀 Open to new projects
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>© {currentYear} Muhammad Ali Hassan. All rights reserved.</p>
            <p>Built with ❤️ using React.js &amp; GSAP</p>
          </div>
          <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top" data-cursor="disable">
            <ArrowUp size={18}/>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
