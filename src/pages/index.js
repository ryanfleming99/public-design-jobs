import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import HeroSection from "../components/HeroSection";
import FaqSection from "../components/FaqSection";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";

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
      <Navbar /> {/* Navbar is included on every page */}
      <HeroSection />
      <ImageCarousel />
      <FaqSection />
      <Footer />
      {/* Centered Bounce Arrow
      <div className="flex justify-center">
        <div
          className="animate-bounce cursor-pointer"
          onClick={() => {
            const targetElement = document.getElementById("target-section-two");
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default Index;
