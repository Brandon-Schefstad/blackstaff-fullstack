/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        secondary: "#FF715B",
        primary: "#131515",
        primaryLight: "#FFEDEB",
        primaryLightest: "#FEFFFB",
        secondaryDark: "#5C0C00",
        secondaryLight: "#F9F9F9",
      },
    },
  },
  plugins: [require("daisyui")],
};

module.exports = config;
