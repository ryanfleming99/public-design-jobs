import React, { useState, useEffect } from "react";
import Image from "next/image";
const ImageCarousel = ({ heading, paragraph, lists, images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 4000); // 1.5-second interval

    return () => clearInterval(imageInterval); // Cleanup interval
  }, [images.length]);

  return (
    <div>
      <div
        id="section-two"
        className="flex flex-col-reverse md:flex-row items-center justify-center p-6 md:p-24"
      >
        {/* Left Side: Image */}
        <div className="md:w-1/2 h-3/6 md:h-[600px] w-full flex items-center justify-center">
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
        <div className="md:w-1/2 text-center md:text-left py-14 px-12">
          <h2 className="text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-lg mb-6">{paragraph}</p>
          <div className="space-y-4">
            {lists &&
              lists.map((item, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                  <p className="text-lg font-semibold">{item.heading}</p>
                  <p className="text-sm text-gray-500">{item.subheading}</p>
                  <p className="text-sm text-gray-400 mt-2">{item.paragraph}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
