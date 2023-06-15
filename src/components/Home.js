import React, { useState } from "react";
import lightOn from "../images/lighton.webp";
import PowerIcon from "../images/power.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styleSheets/Home.css";
import SocialNetworks from "./SocialNetworks";
import useIntersection from "./useIntersection";
import "animate.css";

//* Home Component

function Home() {
  const [lightSwitch, getlightSwitch] = useState(true);

  const handleSwitch = () => {
    getlightSwitch(!lightSwitch);
  };

  const Networks = {
    github: {
      snlink: "https://github.com/Lenin4lp",
      sn: "github",
    },
    linkedin: {
      snlink: "https://www.linkedin.com/in/lenin-pati%C3%B1o-135453224",
      sn: "linkedin",
    },
    instagram: {
      snlink: "https://instagram.com/four_lp?igshid=MzNlNGNkZWQ4Mg==",
      sn: "instagram",
    },
    mail: {
      snlink: "mailto:leninesteban98@outlook.com",
      sn: "mail",
    },
  };

  const [elementRef, isIntersecting] = useIntersection({
    threshold: window.innerHeight < 450 ? 0.2 : 0.6,
  });

  return (
    <section
      ref={elementRef}
      id="siteSection"
      className={`default-section hero align-items-stretch`}
    >
      <div id="VPort" className="salute-container  d-flex container-fluid">
        <div className="row justify-content-center Name align-items-center">
          <div
            id="salute"
            className={`salute animate__animated ${
              isIntersecting ? "animate__zoomIn" : "animate__zoomOut"
            } col-10 col-md-5 col-lg-7 `}
          >
            <div className="salute-text">
              <h2>Hi Stranger!</h2>
              <h1 className="text-fluid">Welcome to CodeLuxe</h1>
              <h2>I'm Lenin Patiño</h2>
              <h3>Front-End Developer</h3>
              <div className="snetworks-container">
                <SocialNetworks sNetworks={Networks.github} />
                <SocialNetworks sNetworks={Networks.instagram} />
                <SocialNetworks sNetworks={Networks.linkedin} />
                <SocialNetworks sNetworks={Networks.mail} />
              </div>
              <a
                className="a-button"
                href="/LeninPatino-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="d-flex buttons text-fluid">
                  Download my CV
                </button>
              </a>
            </div>
          </div>
          <div
            id="brain-light"
            className={`animate__animated ${
              isIntersecting
                ? "animate__fadeInRight animate__delay-1s"
                : "animate__fadeOutRight"
            } col-10 col-md-5 col-lg-3 salute`}
          >
            <div className="brainlight-container d-flex">
              <img
                className={`img-fluid brain brainlight ${
                  lightSwitch ? "brainlight-on" : null
                }`}
                src={lightOn}
                alt="light on"
              />
              <button
                className={`btn brain ${lightSwitch ? "int-off" : "int-on"}`}
                onClick={handleSwitch}
              >
                <img
                  style={{ position: "sticky" }}
                  src={PowerIcon}
                  alt="Bootstrap"
                  width="25"
                  height="25"
                  fill="white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
