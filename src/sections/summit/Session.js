import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import "./Session.css";

function Session({
  imageUrl,
  instructorName,
  aboutInstructor,
  linkedIn,
  moreInfo,
  moreInfoLink,
}) {
  return (
    <div className="session">
      <div className="session__front">
        <img src={imageUrl} alt="" className="session__image" />
        <h3>{instructorName}</h3>
      </div>
      <div className="session__back">
        <h3>{instructorName}</h3>
        <p>{aboutInstructor}</p>
        {linkedIn && (
          <a href={linkedIn} target="_blank">
            <IconButton>
              <LinkedInIcon className="session__back__icon" />
            </IconButton>
          </a>
        )}
        {moreInfo && (
          <p>
            {moreInfo},{" "}
            <a href={moreInfoLink} target="_blank">
              Click here.
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

export default Session;
