export const theme = {
  typography: {
    h1: "@base", // Main headings (mobile first, responsive for larger screens)
    h2: "@base", // Secondary headings
    h3: "@base", // Section titles
    subheading: "text-3xl md:text-2xl font-medium px-4 mb-6 md:mb-4", // Subheadings
    bodyLarge: "text-base md:text-lg text-gray-600", // General body text
    bodySmall: "text-sm md:text-sm text-gray-500" // Smaller body text
  },
  wrappers: {
    container: "max-w-screen-lg mx-auto px-4 md:px-8 py-12 md:py-48", // Main container with responsive padding
    centered: "flex flex-col items-center justify-center text-center" // Centered layout
  },
  buttons: {
    primary:
      "bg-blue-500 text-white py-2 px-4 md:py-2 md:px-4 rounded-lg shadow-lg w-full md:w-auto", // Primary button with responsive padding
    secondary:
      "bg-gray-500 text-white py-2 px-4 md:py-2 md:px-4 rounded-lg shadow-lg w-full md:w-auto" // Secondary button with responsive padding
  }
};
