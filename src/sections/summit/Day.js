import React from "react";
import Session from "./Session";
import "./Day.css";

function Day({ day }) {
  return (
    <div className="day" data-aos="fade-up">
      <h4 className="day__header">{day.dayName}</h4>
      <h5 className="day__header2">{day.dayTitle}</h5>
      <p className="day__description">{day.dayDescription}</p>
      {day.firstSession && (
        <div className="day__session">
          <p className="day__description">
            <br /> <br /> {day.firstSession.beforeSession}
          </p>
          <Session
            imageUrl={day.firstSession.instructorImage}
            instructorName={day.firstSession.instructorName}
            aboutInstructor={day.firstSession.aboutInstructor}
            linkedIn={day.firstSession.linkedIn}
            moreInfo={day.firstSession.moreInfo}
            moreInfoLink={day.firstSession.moreInfoLink}
          />
        </div>
      )}
      {day.secondSession && (
        <div className="day__session">
          <p className="day__description">
            <br />
            <br />
            {day.secondSession.beforeSession}
          </p>
          <br />
          <Session
            imageUrl={day.secondSession.instructorImage}
            instructorName={day.secondSession.instructorName}
            aboutInstructor={day.secondSession.aboutInstructor}
            linkedIn={day.secondSession.linkedIn}
            moreInfo={day.secondSession.moreInfo}
            moreInfoLink={day.secondSession.moreInfoLink}
          />
        </div>
      )}
      <p className="day__description">{day.moreInfo}</p>
    </div>
  );
}

export default Day;
