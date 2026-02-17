import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Active section logic
      const sections = ['hero', 'products', 'testimonials'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If top of section is within view (or close to top)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]); // Removed activeSection dependency to avoid loop

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">MATON</div>
        <nav className="nav-links">
          <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a>
          <a href="#products" className={activeSection === 'products' ? 'active' : ''}>Products</a>
          <a href="#testimonials" className={activeSection === 'testimonials' ? 'active' : ''}>Testimonials</a>
        </nav>
      </div>
    </header>
  );
}
