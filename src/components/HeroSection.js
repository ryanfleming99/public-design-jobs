import Link from "next/link";

export default function HeroSection({
  heading,
  subheading,
  backgroundImage,
  primaryButton,
  primaryButtonLink,
  secondaryButton,
  secondaryButtonLink
}) {
  if (!backgroundImage) {
    console.error("Background image is missing");
    return <div>No Image</div>;
  }

  return (
    <div
      className="relative flex items-center justify-center min-h-screen h-screen bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="relative inset-0 bg-gradient-to-b from-transparent to-white via-transparent via-75% h-full"></div>

      {/* Text Content over the background */}
      <div className="relative z-10 text-center text-white p-4 flex flex-col items-center justify-center w-full">
        <div className="md:w-full text-center md:p-4  justify-center m-auto">
          <h2
            className="md:text-8xl text-4xl font-bold mb-4 md:text-white text-white"
            style={{
              textShadow: "rgb(0 0 0 / 11%) 2px 2px 8px",
              transition: "transform 0.1s ease-out"
            }}
          >
            {heading}
          </h2>
          <p
            className="text-xl mb-6 text-white font-semibold"
            style={{ textShadow: "rgb(0 0 0 / 11%) 2px 2px 8px" }}
          >
            {subheading}
          </p>
        </div>
        <div className="text-center justify-center m-auto flex space-between gap-6">
          <Link href={primaryButtonLink} className="btn btn-secondary">
            {primaryButton}
          </Link>
          <Link href={secondaryButtonLink} className="btn btn-primary">
            {secondaryButton}
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <div
            className="animate-bounce cursor-pointer"
            onClick={() => {
              const targetElement = document.getElementById("section-two");
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
