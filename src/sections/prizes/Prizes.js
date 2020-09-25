import React from "react";
import "./Prizes.css";
import PrizesCard from "./PrizesCard";
import Dots from "./Dots";

function Prizes() {
  return (
    <div className="prizes">
      <h3 data-aos="fade" className="prizes__header">
        Prizes
      </h3>
      <div data-aos="fade" className="prizes__divider">
        <div className="prizes__divider--thick"></div>
        <div className="prizes__divider--thin"></div>
      </div>
      <div data-aos="fade" className="prizes__description">
        <p>
          AppX provides financial and symbolic prizes for participants who will
          win in the hackathon and attend the workshops to encourage them, and
          to turn their ideas into applications
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
          description="The first place winning teams will win prizes up to 20,000 EGP"
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
