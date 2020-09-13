import React from "react";
import Welcome from "./sections/welcome/Welcome";
import Staytuned from "./sections/stay-tuned/Staytuned";
import Navbar from "./sections/navbar/Navbar";
import Prizes from "./sections/prizes/Prizes";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Staytuned />
      <Prizes />
    </div>
  );
}

export default Home;
