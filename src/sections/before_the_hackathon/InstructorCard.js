import React from "react";
import "./InstructorCard.css";

function InstructorCard({ imageUrl, instructorName, aboutInstructor }) {
  return (
    <div className="instructorCard">
      <div className="instructorCard__front">
        <img src={imageUrl} alt="" className="instructorCard__image" />
        <h3>{instructorName}</h3>
      </div>
      <div className="instructorCard__back">
        <h3>{instructorName}</h3>
        <p>{aboutInstructor}</p>
      </div>
    </div>
  );
}

export default InstructorCard;
