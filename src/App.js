import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar.js";
import Home from "./components/Home.js";
import MyFooter from "./components/MyFooter";
import "animate.css";
// *Principal Aplication

const MyProjects = lazy(() => import("./components/MyProjects"));
const AboutMe = lazy(() => import("./components/AboutMe.js"));

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 800);
  }, []);

  return (
    <div data-bs-spy="scroll" data-bs-target="#navId">
      <div className="App" id="home">
        <div className="background-container"></div>
        <div className="principal-container">
          <div className="sticky-top">
            <NavigationBar />
          </div>
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
              <div id="proyectContainer">
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
