import React from "react";
import Navbar from "../../components/Navbar"; // Import Navbar
import HeroSection from "../../components/HeroSection";
import { welcomeSection } from "../../data/welcomeData";
import { theme } from "../../styles/theme";

const Index = () => {
  // useEffect(() => {
  //   const handleMouseMove = event => {
  //     const { clientX, clientY } = event;
  //     const { innerWidth, innerHeight } = window;

  //     // Calculate the position of the mouse relative to the center of the screen
  //     const xOffset = (clientX - innerWidth / 2) / innerWidth;
  //     const yOffset = (clientY - innerHeight / 2) / innerHeight;

  //     // Apply transformation based on mouse position
  //     if (textRef.current) {
  //       textRef.current.style.transform = `translate(${xOffset *
  //         30}px, ${yOffset * 30}px) rotate(${xOffset * 10}deg) skewX(${xOffset *
  //         5}deg)`;
  //     }
  //   };

  //   // Add the mousemove event listener
  //   window.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div>
      {/* Section 1 */}
      {/* Navbar is included on every page */}
      <Navbar />
      <HeroSection
        h1={welcomeSection.h1}
        subheading={welcomeSection.sectionTitle}
        backgroundImage={welcomeSection.backgroundImage}
      />
    </div>
  );
};

export default Index;
