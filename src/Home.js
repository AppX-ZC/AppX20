import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Welcome from "./sections/welcome/Welcome";
import Staytuned from "./sections/stay-tuned/Staytuned";
import Navbar from "./sections/navbar/Navbar";
import Prizes from "./sections/prizes/Prizes";
import AboutUs from "./sections/about-us/AboutUs";
import Sponsors from "./sections/sponsors/Sponsors";
import Footer from "./sections/footer/Footer";
import Memorial from "./sections/memorial/Memorial";
import Challenges from "./sections/challenges/Challenges";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Welcome />
      <Staytuned />
      <Challenges />
      <Prizes />
      <AboutUs />
      <Memorial />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
