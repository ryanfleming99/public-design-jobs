import { theme } from "../styles/theme";

export default function Section({ h1, subheading, backgroundImage }) {
  if (!backgroundImage) {
    console.error("Background image is missing");
    return <div>No Image</div>;
  }

  return (
    <section
      className="relative flex items-left justify-left min-h-screen h-screen bg-center bg-cover md:w-full"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className=" h-full pt-48 w-1/2 align-center justify-center mx-auto ">
        <div className="px-24 pt-24 relative z-10 text-gray-700 flex flex-col">
          <header className="md:pt-0 text-center md:mb-6 ">
            <h2 className={`${theme.typography.h1} drop-shadow-lg`}>{h1}</h2>
            <p className={`${theme.typography.subheading} drop-shadow-lg`}>
              {subheading}
            </p>
          </header>
        </div>
      </div>
    </section>
  );
}
