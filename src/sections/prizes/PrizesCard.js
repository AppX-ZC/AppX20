import React from "react";
import "./PrizesCard.css";

function Card({ firstPlace, title, description, smallTitle, order, aos }) {
  return (
    <div
      className={firstPlace ? "prizescard--firstplace" : "prizescard"}
      style={{ order: order }}
      data-aos={aos}
    >
      {firstPlace && <div className="prizescard__firstplace">1</div>}
      <h3
        className={`prizescard__title ${
          firstPlace && "prizescard__title--orange"
        }`}
      >
        {title}{" "}
        {smallTitle && <p className="prizescard__smallTitle">{smallTitle}</p>}
      </h3>
      <p className="prizescard__description">{description}</p>
    </div>
  );
}

export default Card;
