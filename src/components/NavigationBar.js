import React from "react";
import "../styleSheets/NavigationBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeluxeLogo from "../images/codeluxe-transparente.webp";

function NavigationBar() {
  return (
    <div className="navigation-container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a
            className="navbar-brand col-5 col-md-8"
            href="#home"
            rel="noopener noreferrer"
          >
            <img
              className="logo img-fluid"
              src={CodeluxeLogo}
              alt="My logo is supposed to be here..."
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active menu-options"
                  aria-current="page"
                  href="#home"
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-options"
                  href="#about-me"
                  rel="noopener noreferrer"
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link menu-options"
                  href="#my-project"
                  rel="noopener noreferrer"
                >
                  My Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
