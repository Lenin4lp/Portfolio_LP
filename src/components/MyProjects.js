import React, { useCallback } from "react";
import "../styleSheets/MyProjects.css";
import Modal from "./Modal";
import useIntersection from "./useIntersection";
import UnderConstruction from "../images/work-in-progress.png";

function MyProjects() {
  const [elementRef, isIntersecting] = useIntersection({
    threshold: window.innerHeight < 450 ? 0.2 : 0.6,
  });
  const AnimationExecute = useCallback(
    (animateInit, animateEnd) => {
      if (isIntersecting) {
        return animateInit;
      } else {
        return animateEnd;
      }
    },
    [isIntersecting]
  );
  return (
    <div ref={elementRef} className="proyects-container container-fluid">
      <div className="row d-flex  proyects-title">
        <h1 className="text-center text-fluid">My Projects</h1>
      </div>
      <section
        id="projects-section"
        style={{ paddingTop: "10px" }}
        className="default-section"
      >
        <div
          id="modal"
          className={`whole-modal justify-content-center animate__animated ${AnimationExecute(
            "animate__fadeIn",
            "animate__fadeOut"
          )}`}
        >
          <Modal id="modal-tag">
            <div className=" container-fluid d-block justify-content-center align-items-center">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                  <img
                    className="img-fluid wip-img"
                    src={UnderConstruction}
                    alt=""
                  />
                </div>
              </div>
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                  <p className="text-center text-fluid">
                    Exciting projects coming soon! <br /> Stay tuned for my
                    latest works in progress.
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    </div>
  );
}

export default MyProjects;
