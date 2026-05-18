import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { gsap } from 'gsap';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);

  /* scroll state */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* GSAP entrance */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { y: -60, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} ref={headerRef}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo" onClick={() => scrollToSection('hero')} data-cursor="disable">
            <span className="logo-text">MAH</span>
            <span className="logo-dot"></span>
          </div>

          {/* Nav */}
          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {[
                { id: 'hero',     label: 'Home' },
                { id: 'about',    label: 'About' },
                { id: 'skills',   label: 'Skills' },
                { id: 'projects', label: 'Work' },
                { id: 'contact',  label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)} data-cursor="disable">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume CTA */}
          <a
            href="/AliHassan-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="header-resume-btn"
            data-cursor="disable"
          >
            <Download size={14} />
            Resume
          </a>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
