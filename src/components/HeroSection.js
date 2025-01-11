import Link from "next/link";
import { theme } from "../styles/theme";

// Debugging: Log the theme object and its properties
if (typeof window !== "undefined") {
  console.log("Theme object:", theme);
  console.log("Theme wrappers.container:", theme.wrappers.container);
  console.log("Theme typography.h1:", theme.typography.h1);
  console.log("Theme typography.subheading:", theme.typography.subheading);
}

export default function HeroSection({
  h1,
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
      <div className={`${theme.wrappers.container}`}>
        {/* Text Content over the background */}
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full">
          <div className="md:w-full text-center md:mb-6 justify-center m-auto">
            {/* Heading */}
            <h1 className={`${theme.typography.h1} drop-shadow-lg`}>{h1}</h1>
            {/* Subheading */}
            <p className={`${theme.typography.subheading} drop-shadow-md`}>
              {subheading}
            </p>
          </div>
          {/* Buttons */}
          <div className="text-center justify-center w-1/2 flex space-between gap-6">
            {primaryButton && primaryButtonLink && (
              <Link href={primaryButtonLink} className="btn btn-primary">
                {primaryButton}
              </Link>
            )}
            {secondaryButton && secondaryButtonLink && (
              <Link href={secondaryButtonLink} className="btn btn-secondary">
                {secondaryButton}
              </Link>
            )}
          </div>
          {/* Bounce Icon */}
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
    </div>
  );
}
