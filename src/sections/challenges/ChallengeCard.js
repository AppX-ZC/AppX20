import React from "react";
import "./ChallengeCard.css";

function ChallengeCard({ image, title, description, onClick }) {
  return (
    <div data-aos="zoom-in" className="challengeCard" onClick={onClick}>
      <img className="challengeCard__image" src={image} alt="" />
      <h2 className="challengeCard__title">{title}</h2>
      <p className="challengeCard__description">{description}</p>
    </div>
  );
}

export default ChallengeCard;
