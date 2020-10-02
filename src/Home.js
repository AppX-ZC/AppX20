import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Welcome from "./sections/welcome/Welcome";
import Staytuned from "./sections/stay-tuned/Staytuned";
import Navbar from "./sections/navbar/Navbar";
import Prizes from "./sections/prizes/Prizes";
import Sponsors from "./sections/sponsors/Sponsors";
import Footer from "./sections/footer/Footer";
import Memorial from "./sections/memorial/Memorial";
import Challenges from "./sections/challenges/Challenges";
import Before from "./sections/before_the_hackathon/Before";
import During from "./sections/during_the_hackathon/During";
import Pitching from "./sections/pitching/Pitching";
import Summit from "./sections/summit/Summit";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Welcome />
      <Staytuned />
      <Before />
      <During />
      <Challenges />
      <Prizes />
      <Pitching />
      <Memorial />
      <Summit />
      <Sponsors />
    </div>
  );
}

export default Home;
