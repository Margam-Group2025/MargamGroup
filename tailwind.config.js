/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        themegreen: "#35db79",
      },
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
