/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffff",  //No se usa
        secondary: "#A3A3A3",  //hover footer
        dimWhite: "rgba(0, 0, 0, 0.6)",  //parrafos
        dimBlue: "#D32929", //no se usa
        black: "rgba(0, 0, 0, 0.6)", //Titulos alternativa clara #A3A3A3
        gray: "rgba(0, 0, 0, 0.7)",  //Footer
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
