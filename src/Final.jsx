import React from 'react';
import './Final.css';
import { Link } from 'react-router-dom';

export default function Final() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-pages">
          <ul  >
            <h3>Youth Games & Sports Federation of India</h3>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/verify">Verification</Link></li>
            <li><Link to="/registration">Affiliation</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <ul>
            <h3>Careers</h3>
            <li><Link to="/registration">Registration</Link></li>
            <li><Link to="/registration">Affiliate Registration</Link></li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          {/* Newsletter section can be added here */}
        </div>
      </div>
      <div className="footer-social">
        <a href="mailto:youthgamesandsportsfederation@gmail.com?subject=&body=" className="footer-social-link">Email Us</a>
        <a href="https://wa.me/+918605898444" className="footer-social-link">WhatsApp</a>
      </div>
      <div className="footer-info">
        <div className="footer-legal">
          <span>
            Developed by{' '}
            <a href="https://www.linkedin.com/in/yash-kum-658a252aa" target="_blank" rel="noopener noreferrer" className="footer-social-link">Yash
            </a>{' '}
            <Link to="/privacy">,Privacy Policy</Link>
          </span>
        </div>
        <div className="footer-copyright">
          &copy; 2024 Youth Games & Sports Federation of India. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

