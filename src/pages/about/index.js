import React from "react";
import HeroSection from "../../components/HeroSection";
import { aboutSection } from "../../data/aboutData";
import Navbar from "../../components/Navbar";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        h1={aboutSection.heading}
        subheading={aboutSection.subheading}
        backgroundImage={aboutSection.backgroundImage}
        scrollToTarget={aboutSection.scrollToTarget}
      />
    </>
  );
};

export default index;
