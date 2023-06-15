import React from "react";
import ProfilePhoto from "../images/perfil.jpeg";
import "../styleSheets/WhoAmI.css";

function WhoAmI() {
  return (
    <div
      className="container-fluid whoami-container"
      style={{ margin: "0px", padding: "0px" }}
    >
      <div className="row d-flex justify-content-center">
        {/* Info */}
        <div className="col-sm-10 align-items-stretch">
          <div className="container-fluid">
            <div className="row d-flex">
              <div className="col-12 col-sm-6 d-block text-fluid justify-content-center align-items-center">
                <h3 className="who-am-i text-fluid">Lenin Patiño</h3>
                <h4 className="who-am-i text-fluid">Front End Developer</h4>
                <p className="who-am-i text-fluid">Quito-Ecuador</p>
              </div>
              <div className="col-12 col-sm-6 d-flex photo-container align-items-center justify-content-end">
                <img className="my-photo" src={ProfilePhoto} alt="" />
              </div>
            </div>
            <div className="row description">
              <div className="col-12">
                <article>
                  <p>
                    I am a web developer who recently graduated as a software
                    development technologist. With less than a year of
                    experience, I am excited to start building my portfolio with
                    projects that showcase my skills. I am confident in my
                    abilities and firmly believe that continuous learning is the
                    key to becoming an exceptional professional. My passion for
                    technology and dedication to continuous improvement drive me
                    to tackle new challenges and stay up-to-date with the latest
                    trends in web development
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAmI;
