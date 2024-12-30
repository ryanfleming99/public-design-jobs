import React, { useState, useEffect } from "react";
import Image from "next/image";
const ImageCarousel = ({ scrollToTarget }) => {
  const images = [
    "https://res.cloudinary.com/ryry/image/upload/v1728136230/public-design-jobs/ryan-london_zkiowr.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728136108/public-design-jobs/ry_boi_public_design_job_artwork_wall_outside_london_HDR_arcite_3bd2a794-63c9-49f9-80fd-f4c6d402a75f_gjnjk6.png",
    "https://res.cloudinary.com/ryry/image/upload/v1728136156/public-design-jobs/ry_boi_An_artistic_representation_of_an_ideal_city_filled_with__c5634c36-eb40-4fc8-88e0-b335b10bbff4_1_srv2tb.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728509870/public-design-jobs/HERO_g8nddw.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728509828/public-design-jobs/ryan_j8742k.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728509829/public-design-jobs/map-background_iggykz.webp"
  ];

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
          <Image
            src={images[currentImage]}
            alt="Slideshow"
            width={500}
            height={500}
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side: Profiles */}
        <div className="md:w-1/2 text-center md:text-left py-10 px-10">
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="font-leckerli">Freelancers</span>
          </h2>
          <p className="text-lg mb-6">
            Discover talented freelancers from around the world. Here are some
            of our top-rated creatives.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-500">Graphic Designer</p>
              <p className="text-sm text-gray-400 mt-2">
                Specializes in branding, visual identity, and illustration. Over
                &quot;Acme Corp&quot; and &quot;CreativeWorks&quot;.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="text-lg font-semibold">John Smith</p>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <p className="text-sm text-gray-400 mt-2">
                Expert in user-centered design, wireframing, and prototyping.
                Has worked on over 50 mobile apps and web projects.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-lg">
              <p className="text-lg font-semibold">Emily Johnson</p>
              <p className="text-sm text-gray-500">Illustrator</p>
              <p className="text-sm text-gray-400 mt-2">
                Passionate about digital painting and character design. Clients
                include &quot;Fantasy Studio&quot; and &quot;GameMaster&quot;.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
