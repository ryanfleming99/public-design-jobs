import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { theme } from "../styles/theme";
import { gsap } from "gsap";

export default function HeroSection({
  h1,
  subheading,
  backgroundImage,
  primaryButton,
  primaryButtonLink,
  secondaryButton,
  secondaryButtonLink
}) {
  const headerRef = useRef(null);
  const containerRef = useRef(null);

  // Function to animate header
  const animateHeader = useCallback(() => {
    const header = headerRef.current;
    if (!header || !h1) return;

    const text = h1.split("");
    header.innerHTML = ""; // Clear existing content

    text.forEach(letter => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter;
      span.style.display = "inline-block";
      span.style.opacity = 0;
      span.style.transform = "translateY(50px)";
      span.style.textShadow = "rgba(58, 29, 32, 0.63) 7px 5px 7px";
      header.appendChild(span);
    });

    // GSAP Animation
    gsap.to(header.querySelectorAll("span"), {
      color: "#ffffff",
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power1.out"
    });

    gsap.timeline().to(header.querySelectorAll("span"), {
      color: "white",
      duration: 4,
      stagger: 0.05,
      ease: "power1.circ.inOut"
    });
  }, [h1]);

  // Trigger animation on component mount and when `h1` changes
  useEffect(() => {
    animateHeader();
  }, [animateHeader]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen h-screen bg-center bg-cover drop-shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className={theme.wrappers.container}>
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center w-full">
          <div className="md:w-2/3 md:pt-24 text-center md:mb-6 justify-center m-auto">
            <h1
              ref={headerRef}
              className={`${theme.typography.h1} drop-shadow-lg`}
            ></h1>
            <p className={`${theme.typography.subheading} drop-shadow-lg`}>
              {subheading}
            </p>
          </div>
          <div className="text-center justify-center md:w-1/2 flex space-between gap-6 w-full">
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
          <div className="flex justify-center mt-8">
            <div
              className="animate-bounce cursor-pointer"
              onClick={() => {
                const targetElement = document.getElementById("target");
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
