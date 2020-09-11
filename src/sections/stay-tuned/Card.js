import React from "react";
import "./Card.css";

function Card({ title, description, children, flex, aos }) {
  return (
    <div
      className={`card ${flex ? "card__date" : "card__flex"}`}
      data-aos={aos}
    >
      <p className="card__title">
        <div className="card__titleIcon">{children}</div>
        <span>{title}</span>
      </p>
      <p className="card__description">{description}</p>
    </div>
  );
}

export default Card;
