// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media">
        {/* Add social media icons and links */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.png" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/youtube-icon.png" alt="YouTube" />
        </a>
      </div>
      <div className="sections">
        <div className="section">

        </div>
        <div className="section">
        
        </div>
        <div className="section">
          
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
