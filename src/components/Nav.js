import React from 'react'
import './Nav.css'

const Nav = ()  => {
  return (
    <div>
       <header>
        <nav className="navbar">
          <div className="navbar-left">
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i>contact@example.com{" "}
            </a>
            <a href="#">
              <i className="fas fa-mobile-alt"></i>+1 5589 55488 55{" "}
            </a>
          </div>
          <div className="navbar-right">
            <a href="https://twitter.com/Justene205" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/tamah.justin.5" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/tamah_justene/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav
