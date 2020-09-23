import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

function Buttons() {
  const [showMessage, setShowMessage] = useState(false);
  const summitLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScR2Yb7tNS1j74uWTfKXa-Dm00TWmAQUgqIkU4v1GxpCbGuwA/viewform?fbclid=IwAR0MNvn4WQ0lE6trpYyyoaUnJV1N5l6OeN8NyzXk91lj6LKcKZjLS5me6rA";

  return (
    <div className="btn">
      <div className="buttons">
        <div
          className="buttons__link buttons__link--hackathon"
          onClick={() => setShowMessage(!showMessage)}
        >
          <img className="button__icon" src="./images/edit.svg" alt="" />
          <span className="buttons__text">Register for Hackathon</span>
        </div>
        <a
          target="_blank"
          href={summitLink}
          className="buttons__link buttons__link--summit"
        >
          <img className="button__icon" src="./images/edit.svg" alt="" />
          <span className="buttons__text">Register for Summit</span>
        </a>
      </div>
      {showMessage && (
        <div className="btn__message" data-aos="fade-in">
          Sorry, the register is closed now but{" "}
          <a target="_blank" style={{ color: "white" }} href={summitLink}>
            click here
          </a>{" "}
          to register in the summit.
        </div>
      )}
    </div>
  );
}

export default Buttons;
