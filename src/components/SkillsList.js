import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styleSheets/Skills.css";

function SkillsList({ SkillList }) {
  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <div className="skill-container">
        <div>
          <img
            className="tec-img img-fluid"
            src={require(`../images/${SkillList.techImage}.svg`)}
            alt=""
          />
        </div>
        <div className="tec-text-container">
          <h4 className="tec-text text-center text-fluid">
            {SkillList.techName}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SkillsList;
