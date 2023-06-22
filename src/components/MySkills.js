import React from "react";
import Skills from "./SkillsList.js";

const Technologies = {
  javaScript: {
    techImage: "JS",
    techName: "JavaScript",
  },
  htmlTec: {
    techImage: "html5",
    techName: "Html",
  },
  cssTec: {
    techImage: "css3",
    techName: "Css",
  },
  reactTec: {
    techImage: "react",
    techName: "React Js",
  },
};

function MySkills() {
  return (
    <div className="container-fluid d-block justify-content-center text-center align-content-center">
      <div className="row ">
        <div className="col-12">
          <h3>Skills</h3>
        </div>
      </div>

      <div className="row d-flex justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6 col-sm-3">
              <Skills SkillList={Technologies.javaScript}></Skills>
            </div>
            <div className="col-6 col-sm-3">
              <Skills SkillList={Technologies.htmlTec}></Skills>
            </div>
            <div className="col-6 col-sm-3">
              <Skills SkillList={Technologies.cssTec}></Skills>
            </div>
            <div className="col-6 col-sm-3">
              <Skills SkillList={Technologies.reactTec}></Skills>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MySkills);
