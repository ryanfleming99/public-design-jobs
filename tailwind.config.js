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
      },
      keyframes: {
        hue: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" }
        }
      },
      animation: {
        hue: "hue 10s infinite linear"
      }
    }
  },
  plugins: [flowbite.plugin()]
};
