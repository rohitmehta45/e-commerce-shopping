import React from 'react';
import './Footer.css';
import logoImg from "../../assets/logo.png";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-column logo-column">
          <div className="logo-wrapper">
            <img src={logoImg} alt="Logo" />
            <h2 className="logo">ShopEase</h2>
          </div>
          <p>Making quality products accessible to everyone. Designed for modern living.</p>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li>All Products</li>
            <li>Featured</li>
            <li>New Arrivals</li>
            <li>Deals</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping Info</li>
            <li>Returns</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="social-media-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/rohit-mehta-5133a8312/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
