import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <hr className="contact-hr" />
        <p>We would love to hear from you!</p>
      </div>

      <div className="contact-info">
        <div className="contact-info-left">
          <div className="contact-section">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-details">
              <h3>Location:</h3>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-details">
              <h3>Emails:</h3>
              <p>info@example.com</p>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="contact-details">
              <h3>Calls:</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>

          <div className="contact-section">
            <div className="contact-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="contact-details">
              <h3>Open Hours</h3>
              <p>Mon-Fri: 9am-5pm</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <div className='form-button'>
            <button className="contact-button">Send Message</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

