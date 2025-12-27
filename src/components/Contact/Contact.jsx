import React, { useState } from 'react';
import './Contact.css';
import { IoMdMail, IoMdCall, IoMdBusiness } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xojqelkp", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setShowToast(true);
        form.reset();
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="contact" className='Contact-Container'>
      
      {showToast && (
        <div className="toast-notification">
          Message Sent Successfully!
        </div>
      )}

      <div className="contact-main">
        <div className="left-container">
          <h1>We're here to help</h1>
          <p>
            Have a question about your order, products, or just want to<br/>
            say hello? Drop us a line and our team will get back to you.
          </p>

          <div className="box-container">
            <div className="contact-box">
              <div className="contact-box-header">
                <span><IoMdMail /></span>
                <h3>Email Us</h3>
              </div>
              <p>Our friendly team is here to help</p>
              <p className="info">hello@luxestore.com</p>
            </div>

            <div className="contact-box">
              <div className="contact-box-header">
                <span><IoMdCall /></span>
                <h3>Phone</h3>
              </div>
              <p>Mon-Fri 8am to 5pm</p>
              <p className="info">+977 **********</p>
            </div>

            <div className="contact-box">
              <div className="contact-box-header">
                <span><IoMdBusiness /></span>
                <h3>Office</h3>
              </div>
              <p>Come say hello at our office HQ</p>
              <p className="info">123 Market St, San Francisco, CA 94103</p>
            </div>
          </div>

          <div className="map-container">
            <h3>Our Location</h3>
            <iframe
              title="LuxeStore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019456789!2d-122.40641718468155!3d37.78583497975752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b0e6e233%3A0x6b4e3b2fa0c1ef5!2s123%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103!5e0!3m2!1sen!2snp!4v1699899999999!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="right-container">
          <div className="form-wrapper">
            <h3>Send us a message</h3>
            <p>We'll get back to you within 24 hours.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select name="subject" required>
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  onInput={e => e.target.style.height = "auto"}
                  onChange={e => e.target.style.height = e.target.scrollHeight + "px"}
                ></textarea>
              </div>
              <button type="submit">
                Send Message <FaPaperPlane style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-bottom">
        <div className="contact-logo">
          <img src={logo} alt="LuxeStore Logo" />
        </div>
        <div className="contact-footer-links">
          <a href="#shop">Shop</a>
          <a href="#about">About Us</a>
          <a href="#careers">Careers</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Services</a>
        </div>
        <div className="contact-copyright">
          &copy; {new Date().getFullYear()} ShopEase Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Contact;
