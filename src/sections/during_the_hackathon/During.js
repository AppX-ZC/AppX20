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
      <div className="during__days">
        <a
          href="https://docs.google.com/document/d/1znP51mL9emoMuUMf-UCjjkkzuAJuoYGZB8rdyXWrK8c/edit#heading=h.a957cpk70uyg"
          className="during__days__day"
          target="_blank"
        >
          Day 1
        </a>

        <a
          href="https://docs.google.com/document/d/13hkAecqVtnvyYWbuBKqRVuNdz3BsRrGdxZ9U0J0PKeo/edit#"
          className="during__days__day"
          target="_blank"
        >
          Day 2
        </a>

        <a
          href="https://docs.google.com/document/d/1QDnaTZN4bnvqr0Qbw4TgqqrPhL-t1VhH8dJznVskGVQ/edit#heading=h.knxsib7wzvm1"
          className="during__days__day"
          target="_blank"
        >
          Day 3
        </a>
      </div>
    </div>
  );
}

export default During;
