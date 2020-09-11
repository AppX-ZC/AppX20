import React from "react";
import "./Welcome.css";

import Navbar from "./Navbar";
import Intro from "./Intro";
import Buttons from "./Buttons";

function Welcome() {
  return (
    <div
      className="welcome"
      style={{
        backgroundImage: "url('images/bg-image.png')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Intro />
      <Buttons />
    </div>
  );
}

export default Welcome;
