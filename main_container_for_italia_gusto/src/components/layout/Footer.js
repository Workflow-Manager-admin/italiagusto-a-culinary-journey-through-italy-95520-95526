import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer component for the ItaliaGusto blog.
 * Contains copyright information, social links, and secondary navigation.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">ItaliaGusto</h3>
            <p className="footer-description">A culinary journey through Italy - exploring regional specialties, traditional recipes, cooking techniques, and culinary traditions.</p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/regions" className="footer-link">Regions</a></li>
              <li><a href="/recipes" className="footer-link">Recipes</a></li>
              <li><a href="/traditions" className="footer-link">Traditions</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Connect</h3>
            <ul className="footer-social">
              <li><a href="#" className="footer-social-link">Instagram</a></li>
              <li><a href="#" className="footer-social-link">Facebook</a></li>
              <li><a href="#" className="footer-social-link">Pinterest</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} ItaliaGusto: A Culinary Journey Through Italy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
