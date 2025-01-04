import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "../pages/api/auth/signin";

const ImageCarousel = ({ mainHeading, mainParagraph, lists, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 2000); // 1.5-second interval

    return () => clearInterval(imageInterval); // Cleanup interval
  }, [images.length]);

  return (
    <div>
      <div className="md:pt-24 w-full flex items-center justify-center flex-col">
        <p className="text-6xl font-bold mb-8">{mainHeading}</p>
        <p className="text-2xl text-blue-600 mb-8">{mainParagraph}</p>
        <AuthButton />
      </div>

      <div
        id="section-two"
        className="flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-24"
      >
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
        <div className="md:w-1/2 text-center md:text-left py-8 px-12">
          <div className="space-y-10 mb-8">
            {lists &&
              lists.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-lg hover:bg-blue-500  hover:transition-colors "
                >
                  <p className="text-2xl font-semibold mb-2 ">{item.heading}</p>
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
