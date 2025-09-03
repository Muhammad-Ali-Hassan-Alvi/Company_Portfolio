import React from 'react';
import { Code, Brain, Search, Shield, Database, Globe, Zap, Lock } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <Code size={40} />,
      description: 'Full-stack development with modern technologies',
      skills: ['React.js', 'Node.js', 'Python', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Express.js'],
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'AI & Automation',
      icon: <Brain size={40} />,
      description: 'Intelligent automation solutions and AI integration',
      skills: ['n8n', 'Make.com', 'OpenAI API', 'Machine Learning', 'RPA', 'Chatbots', 'Data Analysis'],
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)'
    },
    {
      title: 'SEO & Marketing',
      icon: <Search size={40} />,
      description: 'Search engine optimization and digital marketing',
      skills: ['Technical SEO', 'Content Strategy', 'Google Analytics', 'Keyword Research', 'Local SEO', 'Performance Optimization'],
      color: '#4ecdc4',
      gradient: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)'
    },
    {
      title: 'Cyber Security',
      icon: <Shield size={40} />,
      description: 'Security assessment and protection strategies',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance', 'Threat Analysis'],
      color: '#45b7d1',
      gradient: 'linear-gradient(135deg, #45b7d1 0%, #96c93d 100%)'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          I specialize in creating innovative solutions that combine cutting-edge technology 
          with practical business needs across multiple domains.
        </p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ '--card-color': category.color }}
            >
              <div className="card-header">
                <div className="card-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
              
              <div className="card-content">
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="card-footer">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      background: category.gradient,
                      width: '100%'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="additional-skills">
          <h3>Additional Tools & Technologies</h3>
          <div className="tools-grid">
            <div className="tool-item">
              <Database size={24} />
              <span>Database Design</span>
            </div>
            <div className="tool-item">
              <Globe size={24} />
              <span>Cloud Services</span>
            </div>
            <div className="tool-item">
              <Zap size={24} />
              <span>API Development</span>
            </div>
            <div className="tool-item">
              <Lock size={24} />
              <span>Security Protocols</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
