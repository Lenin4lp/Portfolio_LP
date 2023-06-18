import React from "react";
import CodImg from "../images/codeluxe-light.webp";
import "../styleSheets/MyFooter.css";
import SocialNetworks from "./SocialNetworks";
import useIntersection from "./useIntersection";

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

const MyFooter = () => {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: window.innerHeight < 450 ? 0.2 : 0.4,
  });
  return (
    <div ref={elementRef}>
      <div className="footer">
        <div
          className={`container-fluid animate__animated ${
            isIntersecting ? "animate__slideInLeft" : "animate__slideOutRigh"
          }`}
        >
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center py-3">
              <p className="text-fluid text-center">
                ©{new Date().getFullYear()} CodeLuxe. All right reserved
              </p>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center py-3">
              <img
                className="img-fluid cod-img"
                src={CodImg}
                alt="CodeLuxe_logo"
              />
            </div>
            <div className="col-12 col-md-4 d-block justify-content-center align-items-center footer-sn py-4">
              <h4 className="text-fluid text-center">Follow me</h4>
              <div className="footer-sn-container">
                <SocialNetworks sNetworks={Networks.github} />
                <SocialNetworks sNetworks={Networks.instagram} />
                <SocialNetworks sNetworks={Networks.linkedin} />
                <SocialNetworks sNetworks={Networks.mail} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
