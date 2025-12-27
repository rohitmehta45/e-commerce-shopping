import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xojqelkp', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Error sending the email. Try again.');
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-inner">
        <div className="newsletter-left">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get 10% off your first order and stay updated with our latest arrivals.</p>
        </div>
        <div className="newsletter-right">
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {success && (
        <div className="newsletter-toast">
          Successfully subscribed!
        </div>
      )}
    </div>
  );
};

export default Newsletter;
