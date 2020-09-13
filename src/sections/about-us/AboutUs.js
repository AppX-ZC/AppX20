import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutus">
      <h3 className="aboutus__header">ABOUT US</h3>
      <div className="aboutus__divider">
        <div className="aboutus__divider--thick"></div>
        <div className="aboutus__divider--thin"></div>
      </div>
      <p className="aboutus__description">
        AppX is the annual event powered by IEEE Zewail City Student Branch
        sharing technology awareness and knowledge along with technical
        workshops and public lectures with all the people eager about
        engineering and tech. The theme of AppX '20 is about Sustainability and
        the application of the Sustainable Development Goals (SDGs) of the
        United Nations (UN) along with some technical aspects representing the
        involvement with The Fourth Industrial Revolution.
      </p>
      <Link className="aboutus__link" to="/about">
        <span>MORE ABOUT US</span>
      </Link>
    </div>
  );
}

export default AboutUs;
