import React from "react";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="sponsors">
      <h3 className="sponsors__header">Closing and Ceremony</h3>
      <p className="sponsors__description">
        Finally, Many Thanks for all the attendees. We hope you all the best at
        your next steps, and we are looking forward to seeing you in the next
        event. Also, We give warmest thanks to our sponsors for their continued
        support.
      </p>
      <h3 className="sponsors__header">Sponsors</h3>
      <div className="sponsors__divider">
        <div className="sponsors__divider--thick"></div>
        <div className="sponsors__divider--thin"></div>
      </div>
      <div className="sponsors__images">
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/City Logo3.png"
          alt="sponsot city"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/Analysis.png"
          alt="sponsor Analysis"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/Drug Cloud.png"
          alt="sponsor drug cloud"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/EBD.png"
          alt="sponsor ebd"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/ECB English Logo.png"
          alt="sponsor ecb"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/EgSC logo.png"
          alt="sponsor egsc"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/ENND logo4.png"
          alt="sponsor ennd"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/MEK_logo.png"
          alt="sponsor mek"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/Nobel Egypt.png"
          alt="sponsor nobel eg"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/sammly5.png"
          alt="sponsor sammly"
          className="sponsors__sponsorImage"
        />
        <img
          data-aos="zoom-out-up"
          src="./images/sponsors/ABD.png"
          alt="sponsor ABD"
          className="sponsors__sponsorImage"
        />
      </div>
    </div>
  );
}

export default Sponsors;
