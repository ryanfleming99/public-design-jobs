const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css", // Corrected glob pattern
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        leckerli: ['"Leckerli One"', "cursive"]
      }
    }
  },
  plugins: [flowbite.plugin()]
};
