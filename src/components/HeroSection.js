export default function HeroSection() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen h-screen bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/ryry/image/upload/v1728138865/public-design-jobs/ry_boi_hyperrealistic_white_only_alabaster_statues_london_white_ee1414a5-55e3-46fd-98d4-e581eb856dad_2_rxkr0k.webp)"
      }}
    >
      <div className="relative inset-0 bg-gradient-to-b from-transparent to-white via-transparent via-75%"></div>

      {/* Text Content over the background */}
      <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center h-full w-full">
        <div className="md:w-full text-center md:p-4">
          <h2
            className="md:text-8xl text-4xl font-bold mb-4 md:text-white text-white"
            style={{
              textShadow: "rgb(0 0 0 / 11%) 2px 2px 8px",
              transition: "transform 0.1s ease-out"
            }}
          >
            Public Design Jobs
          </h2>
          <p
            className="text-xl mb-6 text-white font-semibold"
            style={{ textShadow: "rgb(0 0 0 / 11%) 2px 2px 8px" }}
          >
            The new platform for creative freelancers. Find work, showcase your
            talent, and grow your career.
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
  );
}
