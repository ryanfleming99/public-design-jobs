import React, { useState, useEffect } from "react";
import Image from "next/image";
import { theme } from "../styles/theme";
import AuthButton from "../pages/api/auth/signin";

const ImageCarousel = ({ h2, className, mainParagraph, lists, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 2000); // 1.5-second interval

    return () => clearInterval(imageInterval); // Cleanup interval
  }, [images.length]);

  return (
    <div className="custom-gradient ">
      <div
        id="target"
        className={`  pt-24 md:px-6 md:pt-36 w-full flex items-center justify-center flex-col text-center  ${className}`}
      >
        <h2 className={`${theme.typography.h2} text-white`}>{h2}</h2>
        <p className={`${theme.typography.subheading} text-white`}>
          {mainParagraph}
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center p-8  md:p-24 md:pt-16">
        {/* Left Side: Image */}
        <div className="md:w-1/2 h-3/6 md:h-[600px] max-w-[500px] w-full flex items-center justify-center md:mb-16 ">
          {images && images.length > 0 ? (
            <Image
              src={images[currentImage]}
              alt={`Slideshow image ${currentImage + 1}`}
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg shadow-lg"
            />
          ) : (
            <p>No images available</p>
          )}
        </div>
        {/* Right Side: Profiles */}
        <div className="md:w-1/2 md:py-8 md:px-12 py-6">
          <div className="space-y-12 md:space-y-10  mb-4 md:mb-8 md:px-8 reverse-column">
            {lists &&
              lists.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:bg-blue-800 hover:text-white hover:transition-colors md:p-8 p-8"
                >
                  <p className="text-2xl font-semibold mb-2">{item.h2}</p>
                  <p className="text-lg text-gray-500">{item.subheading}</p>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8">
            <div
              className="animate-bounce cursor-pointer"
              onClick={() => {
                const targetElement = document.getElementById("target-two");
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
