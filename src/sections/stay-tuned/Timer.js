import React, { useEffect } from "react";

import "./Timer.css";

function Timer({ days, hours, minutes, seconds, completed }) {
  return (
    <div className="timer" data-aos="flip-right">
      <img
        className="timer__glass"
        src="./images/hourglass.svg"
        alt="hour glass"
      />
      {!completed ? (
        <div className="timer__time">
          <div className="timer__time--count">
            <span className="timer__time--num">{days}</span>
            <span className="timer__time--title">Days</span>
          </div>
          <div className="timer__time--count">
            <span className="timer__time--num">{hours}</span>
            <span className="timer__time--title">Hours</span>
          </div>
          <div className="timer__time--count">
            <span className="timer__time--num">{minutes}</span>
            <span className="timer__time--title">Minutes</span>
          </div>
          <div className="timer__time--count">
            <span className="timer__time--num">{seconds}</span>
            <span className="timer__time--title">Seconds</span>
          </div>
        </div>
      ) : (
        <div className="timer__completed timer__time--num">Now</div>
      )}
    </div>
  );
}

export default Timer;
