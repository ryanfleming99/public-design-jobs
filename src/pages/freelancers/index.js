import React from "react";
import HeroSection from "../../components/HeroSection";
import { freelanceSection } from "../../data/freelanceData";
import Navbar from "../../components/Navbar";
import ImageCarousel from "../../components/ImageCarousel";

const index = () => {
  return (
    <>
      <Navbar />
      <HeroSection
        heading={freelanceSection.heading}
        subheading={freelanceSection.subheading}
        backgroundImage={freelanceSection.backgroundImage}
        scrollToTarget={freelanceSection.scrollToTarget}
      />
      <ImageCarousel
        heading={freelanceSection.lists.heading}
        subheading={freelanceSection.lists.subheading}
        paragraph={freelanceSection.lists.paragraph}
        lists={freelanceSection.lists}
        images={freelanceSection.images}
      />
    </>
  );
};

export default index;
