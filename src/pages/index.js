import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const HomePage = () => {
  const images = [
    "https://res.cloudinary.com/ryry/image/upload/v1728136230/public-design-jobs/ryan-london_zkiowr.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728136108/public-design-jobs/ry_boi_public_design_job_artwork_wall_outside_london_HDR_arcite_3bd2a794-63c9-49f9-80fd-f4c6d402a75f_gjnjk6.png",
    "https://res.cloudinary.com/ryry/image/upload/v1728136156/public-design-jobs/ry_boi_An_artistic_representation_of_an_ideal_city_filled_with__c5634c36-eb40-4fc8-88e0-b335b10bbff4_1_srv2tb.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728509870/public-design-jobs/HERO_g8nddw.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728509828/public-design-jobs/ryan_j8742k.webp",
    "https://res.cloudinary.com/ryry/image/upload/v1728509829/public-design-jobs/map-background_iggykz.webp"
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 1500); // 1.5-second interval

    return () => clearInterval(imageInterval); // Cleanup interval
  }, [images.length]);

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = index => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = event => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Calculate the position of the mouse relative to the center of the screen
      const xOffset = (clientX - innerWidth / 2) / innerWidth;
      const yOffset = (clientY - innerHeight / 2) / innerHeight;

      // Apply transformation based on mouse position
      if (textRef.current) {
        textRef.current.style.transform = `translate(${xOffset *
          30}px, ${yOffset * 30}px) rotate(${xOffset * 10}deg) skewX(${xOffset *
          5}deg)`;
      }
    };

    // Add the mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Section 1 */}
      <div
        className="relative flex items-center justify-center min-h-screen h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/ryry/image/upload/v1728138865/public-design-jobs/ry_boi_hyperrealistic_white_only_alabaster_statues_london_white_ee1414a5-55e3-46fd-98d4-e581eb856dad_2_rxkr0k.webp)"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white via-transparent via-75%"></div>

        {/* Text Content over the background */}
        <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center h-full w-full">
          <div className="md:w-full text-center p-4">
            <h2
              ref={textRef}
              className="text-6xl font-bold mb-4 text-white"
              style={{
                textShadow: "rgb(0 0 0 / 11%) 2px 2px 8px",
                transition: "transform 0.1s ease-out"
              }}
            >
              PUBLIC DESIGN JOBS
            </h2>
            <p
              className="text-xl mb-6 text-white font-semibold"
              style={{ textShadow: "rgb(0 0 0 / 11%) 2px 2px 8px" }}
            >
              The new platform for creative freelancers. Find work, showcase
              your talent, and grow your career.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <div
              className="animate-bounce cursor-pointer"
              onClick={() => {
                const targetElement = document.getElementById("target-section");
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

      {/* Section 2: Image Left, Profiles on Right */}
      <div
        id="target-section"
        className="flex flex-col-reverse md:flex-row items-center justify-center md:p-24"
      >
        {/* Left Side: Image */}
        <div className="md:w-1/2 h-3/6 md:h-[600px] w-full flex items-center justify-center p-4">
          <Image
            src={images[currentImage]}
            alt="Slideshow"
            fill
            className="h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Right Side: Profiles */}
        <div className="md:w-1/2 text-center md:text-left p-4 ">
          <h2 className="text-4xl font-bold mb-4">Meet Our Freelancers</h2>
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

      {/* Centered Bounce Arrow */}
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
      </div>

      {/* FAQ Section */}
      <div
        id="target-section-two"
        className="flex flex-col items-center justify-center min-h-screen h-3/6 p-6 md:p-24"
      >
        {/* Centered FAQ Section */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-center p-4">
          <h2 className="text-4xl font-bold mb-6">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(1)}
              >
                What is Public Design Jobs?
              </button>
              {openFAQ === 1 && (
                <p className="pt-4 pr-4 pb-4 text-gray-600 text-left">
                  Public Design Jobs is a platform that connects freelancers
                  with companies looking for creative talent. We offer a range
                  of opportunities from graphic design to web development,
                  making it easy to find work that fits your skills.
                </p>
              )}
            </div>
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(2)}
              >
                How do I get started?
              </button>
              {openFAQ === 2 && (
                <p className="pt-4 pr-4 pb-4 text-gray-600 text-left">
                  Simply sign up and create a profile. Once your profile is set
                  up, you can start applying for jobs, showcasing your
                  portfolio, and connecting with clients.
                </p>
              )}
            </div>
            <div className="border-b border-gray-300">
              <button
                className="w-full py-4 text-left text-xl font-medium text-gray-800 focus:outline-none"
                onClick={() => toggleFAQ(3)}
              >
                What services do you offer?
              </button>
              {openFAQ === 3 && (
                <p className="pt-4 pr-4 pb-4 text-gray-600 text-left">
                  We provide a wide range of freelance opportunities in creative
                  fields such as graphic design, web development, content
                  writing, video production, and more. Our platform allows
                  freelancers to find jobs that match their skills and
                  preferences.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
