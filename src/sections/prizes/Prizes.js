import React from "react";
import "./Prizes.css";
import PrizesCard from "./PrizesCard";
import Dots from "./Dots";

function Prizes() {
  return (
    <div className="prizes">
      <h3 className="prizes__header">Prizes</h3>
      <div className="prizes__divider">
        <div className="prizes__divider--thick"></div>
        <div className="prizes__divider--thin"></div>
      </div>
      <div className="prizes__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="prizes__dots">
        <div className="prizes__dots--right">
          <Dots />
        </div>
        <div className="prizes__dots--left">
          <Dots />
        </div>
      </div>
      <div className="prizes__cards">
        <PrizesCard
          firstPlace
          title="20.000"
          smallTitle="Egp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          order={2}
        />
        <PrizesCard
          order={1}
          title="Weekend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <PrizesCard
          order={3}
          title="Feedback"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
    </div>
  );
}

export default Prizes;
