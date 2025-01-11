import React, { useState, useEffect } from "react";
import Image from "next/image";
import { theme } from "../styles/theme";

const ImageCarousel = ({ h2, mainHeading, mainParagraph, lists, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 2000); // 1.5-second interval

    return () => clearInterval(imageInterval); // Cleanup interval
  }, [images.length]);

  return (
    <div className={`${theme.wrappers.container} drop-shadow-lg`}>
      <div
        id="section-two"
        className="pt-12 px-6 md:pt-32 w-full flex items-center justify-center flex-col text-center"
      >
        <p className={theme.typography.h2}>{h2}</p>
        <p className={theme.typography.subheading}>{mainParagraph}</p>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-24 md:pt-18">
        {/* Left Side: Image */}
        <div className="md:w-1/2 h-3/6 md:h-[600px] max-w-[500px] w-full flex items-center justify-center">
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
        <div className="md:w-1/2 md:py-8 md:px-12">
          <div className="space-y-10 mb-4 md:mb-8 px-8 ">
            {lists &&
              lists.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:bg-blue-100 hover:transition-colors md:p-8"
                >
                  <p className="text-2xl font-semibold mb-2">{item.h2}</p>
                  <p className="text-lg text-gray-500">{item.subheading}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
