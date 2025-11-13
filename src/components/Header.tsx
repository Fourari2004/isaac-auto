import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Sun, Moon, Menu, X } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  // Check system preference and localStorage for theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
      setIsDarkMode(false);
      document.body.classList.remove('light-theme');
    } else {
      setIsDarkMode(true);
      document.body.classList.add('light-theme');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" onClick={handleLinkClick}>
              <h1>ISAAC AUTO</h1>
              <p>Premium Automobiles</p>
            </Link>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link 
                  to="/" 
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/vehicles" 
                  className={location.pathname.startsWith('/vehicles') ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={location.pathname === '/about' ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={location.pathname === '/contact' ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <div className="contact-buttons">
              <a href="tel:+212123456789" className="contact-btn">
                <Phone size={18} />
                <span>+212 123 456 789</span>
              </a>
              <a href="https://wa.me/212123456789" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
            
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;