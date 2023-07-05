/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffff",
        secondary: "#00f6ff",
        dimWhite: "rgba(0, 0, 0, 0.7)",
        dimBlue: "rgba(0, 0, 0, 0.1)",
        black: "#A3A3A3",
        gray: "#8E8E8E",
      },
      fontFamily: {
        poppins: ["Quicksand", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
