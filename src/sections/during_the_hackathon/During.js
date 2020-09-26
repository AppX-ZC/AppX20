import React from "react";
import "./During.css";

function During() {
  return (
    <div className="during">
      <h3 className="during__header">During the hackathon</h3>
      <p className="during__description">
        It is a competition that will last for 3 days from 8th to 10th October ,
        in which you can apply, form a team of 3 to 5 people and pass the
        filtration stage and qualify for the final stage in which there will be
        a number of challenges under the Sustainable Development Goals:
      </p>
      <img src="images/SDGs.png" alt="" className="during__image" />
    </div>
  );
}

export default During;
