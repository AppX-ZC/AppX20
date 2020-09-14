import React from "react";
import "./Prizes.css";
import PrizesCard from "./PrizesCard";
import Dots from "./Dots";

function Prizes() {
  return (
    <div className="prizes">
      <h3 data-aos="flip-down" className="prizes__header">
        Prizes
      </h3>
      <div data-aos="flip-down" className="prizes__divider">
        <div className="prizes__divider--thick"></div>
        <div className="prizes__divider--thin"></div>
      </div>
      <div data-aos="flip-down" className="prizes__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="prizes__dots">
        <div data-aos="zoom-out" className="prizes__dots--right">
          <Dots />
        </div>
        <div data-aos="zoom-in" className="prizes__dots--left">
          <Dots />
        </div>
      </div>
      <div className="prizes__cards">
        <PrizesCard
          aos="fade-down"
          firstPlace
          title="20.000"
          smallTitle="Egp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          order={2}
        />
        <PrizesCard
          aos="fade-down-right"
          order={1}
          title="Weekend"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
        <PrizesCard
          aos="fade-up"
          order={3}
          title="Feedback"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </div>
    </div>
  );
}

export default Prizes;
