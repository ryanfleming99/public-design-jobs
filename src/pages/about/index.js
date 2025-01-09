import React from "react";
import HeroSection from "../../components/HeroSection";
import { aboutSection } from "../../data/aboutData";
import Navbar from "../../components/Navbar";
import ImageCarousel from "../../components/ImageCarousel";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        heading={aboutSection.heading}
        subheading={aboutSection.subheading}
        backgroundImage={aboutSection.backgroundImage}
        scrollToTarget={aboutSection.scrollToTarget}
      />
    </>
  );
};

export default index;
