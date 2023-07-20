import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-start">
      <div className="footer">
        <div className="column big-column">
          <h3>Impact</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="column">
          <h3>Useful Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Terms of Service</li>
            <li>Privacy and Policy</li>
          </ul>
        </div>
        <div className="column">
          <h3>Our Services</h3>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <p>1234 Maple Street Suite 567 Anytown, CA 12345 USA</p>
          <p>Phone: +1 123 456 7890</p>
          <p>Email</p>
        </div>
      </div>
      <div className="bottom-row">
        <div className="right-text">
          <p>&copy; {currentYear} Company impact. All Rights Reserved.</p>
        </div>
        <div className="design-by">
          <p>Design by BootstrapMade</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
