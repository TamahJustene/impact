import React, { useState } from "react";
import "./HomePage.css";
import cta from "./assets/cta-bg.jpg";
import TestimonialCarousel from "./Testimonia";
import Portfolio from "./portfolio";
import Teams from "./Teams";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import RecentBlogPosts from "./RecentBlogPosts";
import ContactPage from "./ContactForm";
import Footer from "./Footer";
import Services from "./Services";
import Nav from "./Nav";
import Firstsection from "./FirstSection..js";
import Location from "./Location";
import About from "./About";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Nav/>
      <body>
    <Firstsection />
        {/* OVERPAGE */}
       <Location />
        {/* About us section  */}
       <About />
        {/* The Lats section */}
        <section className="last-about">
          <div className="last-about">
            <div className="about-video">
              <img src={cta} />
            </div>
            <div className="about-video-text">
              <span className="last-about-circle">
              <i className="fas fa-play last-about-icon"></i>
              </span>
              <h3>Call to action </h3>
              <p>
                When creating a call to action, it's important to consider the
                context and placement. It should be prominently displayed,
                visually appealing, and easily clickable or actionable.{" "}
              </p>
              <button>Call to action</button>
            </div>
          </div>
        </section>

        {/* The services offered sections */}
      <section>
        <Services />
      </section>
       
        <section>
          <TestimonialCarousel/>
        </section>
        <section>
          <Portfolio/>
        </section>
        <section>
          <Teams/>
        </section>
        <section>
          <Pricing/>
        </section>
        <section>
          <FAQ/>
        </section>
        <section>
          <RecentBlogPosts/>
        </section>
        <section>
          <ContactPage/>
        </section>
        <section>
          <Footer />
        </section>
      </body>
    </div>
  );
};

export default HomePage;
