import React, { useState, lazy, Suspense } from "react";
import useIntersection from "./useIntersection";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styleSheets/AboutMe.css";
import "animate.css";

function AboutMe() {
  const [content, setContent] = useState(1);
  const [animation, setAnimation] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  // LazyLoad imports
  const Form = lazy(() => import("./Form"));
  const WhoAmI = lazy(() => import("./WhoAmI"));
  const MySkills = lazy(() => import("./MySkills"));

  //* Asynchronous function that allows animations on info cards

  function handleChange(num) {
    setAnimation(true);
    setButtonState(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(setContent(num));
      }, 1350);
    });
  }

  async function getClick(num) {
    await handleChange(num);
    setAnimation(false);
    setButtonState(false);
  }

  // * Funtion in charge of alternate between components everytime the buttons are clicked
  function ChangeComponent() {
    if (content === 1) {
      return (
        <Suspense
          fallback={
            <div className="load-component-container">
              <h1 className="load-component">Loading...</h1>
            </div>
          }
        >
          <WhoAmI></WhoAmI>
        </Suspense>
      );
    } else if (content === 2) {
      return (
        <Suspense
          fallback={
            <div className="load-component-container">
              <h1 className="load-component">Loading...</h1>
            </div>
          }
        >
          <MySkills></MySkills>
        </Suspense>
      );
    } else if (content === 3) {
      return (
        <Suspense
          fallback={
            <div className="load-component-container">
              <h1 className="load-component">Loading...</h1>
            </div>
          }
        >
          <Form></Form>
        </Suspense>
      );
    }
  }

  const [elementRef, isIntersecting] = useIntersection({
    threshold: window.innerHeight < 450 ? 0.2 : 0.4,
  });

  return (
    <div ref={elementRef}>
      <h1 className="text-center" style={{ color: "white" }}>
        About Me
      </h1>
      <section
        id="siteSection"
        className="default-section hero align-items-stretch"
        style={{ padding: "0" }}
      >
        {/* SideBar */}
        <div className="row d-flex justify-content-center">
          <div
            className={`col-12 col-sm-1 d-flex align-items-center justify-content-center animate__animated ${
              isIntersecting
                ? "animate__bounceInLeft"
                : "animate__bounceOutLeft"
            }`}
            style={{ marginTop: "15px" }}
          >
            <ul className="nav nav-underline ">
              <li className="nav-item">
                <button
                  disabled={buttonState}
                  onClick={() => {
                    getClick(1);
                  }}
                  className={`nav-button ${
                    buttonState ? "disabled-nav" : null
                  }`}
                  aria-current="page"
                >
                  Who am I?
                </button>
              </li>
              <li className="nav-item">
                <button
                  disabled={buttonState}
                  onClick={() => {
                    getClick(2);
                  }}
                  className={`nav-button ${
                    buttonState ? "disabled-nav" : null
                  }`}
                >
                  Skills
                </button>
              </li>
              <li className="nav-item">
                <button
                  disabled={buttonState}
                  onClick={() => {
                    getClick(3);
                  }}
                  className={`nav-button ${
                    buttonState ? "disabled-nav" : null
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div
            id="card"
            className={` col-12 col-sm-11 container-sm info-card animate__animated ${
              animation === true
                ? "animate__backOutRight"
                : "animate__lightSpeedInRight"
            } `}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.075)",
              backdropFilter: "blur(1px)",
              margin: "30px",
              marginTop: "40px",
              borderRadius: "25px",
              padding: "30px",
              overflowX: "hidden",
              boxShadow: "0 8px 32 px 0 rgba(0, 0,0,0)",
              maxWidth: "850px",
              transition: "1s",
              border: "0.5px ridge #feffff65",
            }}
          >
            <div className="row d-flex justify-content-center">
              {/* Info */}
              <div className="col-sm-10 align-items-stretch">
                <div className="container-fluid">
                  <div className="row">{ChangeComponent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
