import React from "react";
import "./Memorial.css";

function Memorial() {
  return (
    <div className="memorial">
      <div data-aos="zoom-in" className="memorial__image">
        <img
          className="memorial__imageDrAhmed"
          src="images/Ahmed_Zewail.png"
          alt="Dr\ Ahmed Zewail"
        />
      </div>
      <div data-aos="fade-up" className="memorial__info">
        <div className="memorial__infoHeader">
          <h2 className="memorial__infoHeader_text">Memorial Testimony</h2>
          <img
            className="memorial__infoHeader_image"
            src="images/left-quote.svg"
            alt=""
          />
        </div>
        <p className="memorial__infoDescription">
          “The universe at large is full of questions that we still don't know
          anything about, and there will be always young people, brilliant, who
          are going to make new discoveries and human resources are just
          tremendous in Egypt, but we need the science base; we need the correct
          science base. So, Investing in science education and curiosity-driven
          research is investing in the future.
          <br /> Perhaps the most valuable thing he taught me (his father) was
          that there is no contradiction between devotion to work and enjoyment
          of life and people. I don't know all the reasons for these
          achievements, but I know that I love what I do and I have never wanted
          to rest on my laurels.”
        </p>
        <div className="memorial__infoFooter">
          <h4 className="memorial__infoSignature">Prof. Ahmed Zewail</h4>
          <h5 className="memorial__infoDate">1946-2016</h5>
        </div>
      </div>
    </div>
  );
}

export default Memorial;
