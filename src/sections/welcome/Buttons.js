import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

function Buttons() {
  return (
    <div className="buttons">
      <Link className="buttons__link buttons__link--hackathon">
        <img className="button__icon" src="./images/edit.svg" alt="" />
        <span className="buttons__text">Register for Hackathon</span>
      </Link>
      <Link className="buttons__link buttons__link--summit">
        <img className="button__icon" src="./images/edit.svg" alt="" />
        <span className="buttons__text">Register for Summit</span>
      </Link>
    </div>
  );
}

export default Buttons;
