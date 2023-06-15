import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar.js";
import Home from "./components/Home.js";
import MyFooter from "./components/MyFooter";
import Preloader from "./components/Preloader";
import "animate.css";

// *Principal Aplication

// TODO Add CEO to the web
// TODO Change favicon
// TODO Code Minification it's needed

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const AboutMe = lazy(() => import("./components/AboutMe.js"));
  const MyProjects = lazy(() => import("./components/MyProjects"));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 800);
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  return (
    <div>
      {loaded === false ? <Preloader /> : null}
      <div
        className="App"
        data-bs-spy="scroll"
        data-bs-target="#navId"
        id="home"
      >
        <div className="principal-container">
          <NavigationBar />
          <div className="content">
            {/* HOME */}
            <div style={isLoading ? { opacity: 1 } : {}} className="sweet-home">
              <Home />
            </div>
            {/* ABOUT ME */}
            <Suspense fallback={<h1 className="loading">Loading...</h1>}>
              <div id="about-me"></div>
              <div>
                <AboutMe />
              </div>
            </Suspense>
            {/* MY PROJECTS */}
            <div id="my-project"></div>
            <Suspense fallback={<h1 className="loading">Loading...</h1>}>
              <div
                style={{
                  backdropFilter: "blur(0px)",
                }}
              >
                <MyProjects />
              </div>
            </Suspense>
          </div>
          <MyFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
