import React, { useEffect } from "react";
import Card from "./Card";
import Countdown from "react-countdown";

import "./Staytuned.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MicNoneIcon from "@material-ui/icons/MicNone";
import Timer from "./Timer";

function Staytuned() {
  const counterRender = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <Timer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        completed={completed}
      />
    );
  };

  return (
    <div className="staytuned">
      <h2 className="staytuned__header">STAY TUNED..</h2>
      <div className="staytuned__cards">
        <Card
          aos="fade-up"
          className="staytuned__card"
          title="DATE & TIME"
          description="21:22 April,2020 | 9:00am - 6:00pm"
          flex
        >
          <AccessTimeIcon />
        </Card>
        <Card
          aos="fade-down"
          className="staytuned__card"
          title="SEATS"
          description="300"
        >
          <PersonOutlineIcon />
        </Card>
        <Card
          aos="fade-up"
          className="staytuned__card"
          title="SPEAKERS"
          description="34"
        >
          <MicNoneIcon />
        </Card>
      </div>
      <Countdown date={Date.parse("10/10/2020")} renderer={counterRender} />
    </div>
  );
}

export default Staytuned;
