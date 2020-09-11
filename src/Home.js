import React from "react";
import Welcome from "./sections/welcome/Welcome";
import Staytuned from "./sections/stay-tuned/Staytuned";
import Navbar from "./sections/navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Staytuned />
    </div>
  );
}

export default Home;
