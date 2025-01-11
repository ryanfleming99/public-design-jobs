export const theme = {
  typography: {
    h1: "md:text-5xl font-bold md:mb-6 text-9xl ", // For main headings
    h2: "md:text-4xl md:font-bold md:mb-4", // For secondary headings
    subheading: "md:text-2xl text-2xl font-medium mb-6 md:mb-4", // Smaller subheading
    bodyLarge: "md:text-lg text-gray-600", // General body text
    bodySmall: "md:text-sm text-gray-500" // Smaller body text
  },
  wrappers: {
    container:
      "max-w-screen-lg mx-auto md:px-0 px-4  py-12 px-6 md:py-48 md:px-12",
    centered: "flex flex-col items-center justify-center text-center"
  },
  buttons: {
    primary:
      "bg-blue-500 text-white md:py-2 md:px-4 rounded-lg shadow-lg py-2 px-0",
    secondary:
      "bg-gray-500 text-white md:py-2 md:px-4 rounded-lg shadow-lg py-2 px-0"
  }
};
