import React from "react";
import Welcome from "./sections/welcome/Welcome";
import Staytuned from "./sections/stay-tuned/Staytuned";
import Navbar from "./sections/navbar/Navbar";
import Prizes from "./sections/prizes/Prizes";
import AboutUs from "./sections/about-us/AboutUs";
import Sponsors from "./sections/sponsors/Sponsors";
import Footer from "./sections/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Staytuned />
      <Prizes />
      <AboutUs />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default Home;
