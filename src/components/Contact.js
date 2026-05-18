import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-headline', {
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact', start: 'top 80%' }
      });
      gsap.from('.contact-method', {
        x: -30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-methods', start: 'top 85%' }
      });
      gsap.from('.contact-form-container', {
        x: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-content', start: 'top 85%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section contact" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title contact-headline">
          Get In <span>Touch</span>
        </h2>
        <p className="section-subtitle">
          Always open to exciting projects, collaborations, or just a good conversation about
          tech, security, or automation.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a project in mind, want to discuss collaboration, or need a
              security consultation — I'd love to hear from you.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={22}/></div>
                <div className="method-details">
                  <h4>Email</h4>
                  <p>muhammadalialvi646@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><Phone size={22}/></div>
                <div className="method-details">
                  <h4>Phone / WhatsApp</h4>
                  <p>+92 309-7409806</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon"><MapPin size={22}/></div>
                <div className="method-details">
                  <h4>Location</h4>
                  <p>Pakistan · Available for remote work worldwide</p>
                </div>
              </div>
            </div>

            <div className="contact-cta">
              <h4>Ready to Start?</h4>
              <p>Let's discuss your project requirements and bring your vision to life.</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project or inquiry..." />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting} data-cursor="disable">
                {isSubmitting ? (
                  <><div className="spinner"></div>Sending...</>
                ) : isSubmitted ? (
                  <><CheckCircle size={18}/>Message Sent!</>
                ) : (
                  <><Send size={18}/>Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
