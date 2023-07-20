import React, { useState } from "react";
import heroImage from "./assets/hero-img.svg";
import "./FirstSection.css";

const FirstSection = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <section className="Welcome-page">
      <nav className={`navbar-second ${showNavItems ? "show-nav-items" : ""}`}>
        <div className="navebar-left big">
          <h3>Impact</h3>
        </div>
        <div className="navebar-right big">
          <div className="navbar-icon" onClick={toggleNavItems}>
            <i className="fas fa-bars"></i>
          </div>
          <div className={`nav-items ${showNavItems ? "show-items" : ""}`}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Team</a>
            <a href="#">Blog</a>
            <div className="dropdown">
              <button className="dropbtn">
                Dropdown <i className="fas fa-chevron-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </div>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
      {/* Rest of your code */}

      <div className="welcome-contents">
        <div className="welcome-text">
          <h1>WELCOME TO IMPACT</h1>
          <p>
            Impact is a powerful platform that aims to facilitate positive
            social and environmental change by connecting individuals,
            organizations
          </p>
          <div className="welcome-buttons">
            <div>
              <button className="getstarted">Get started</button>
            </div>
            <div className="welcome-buttons-video">
              <div className="welcome-buttons-video-icon">
                <div className="welcome-buttons-video-icon-1">
                  {" "}
                  <i className="fas fa-play"></i>
                </div>
                <div className="welcome-buttons-video-icon-2">
                  <p>Watch now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="welcome-image">
          <img src={heroImage} />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;







