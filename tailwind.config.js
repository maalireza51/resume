const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'}
      },
      transitionProperty: {
        width: "width",
      },
    },
    colors: {
      ...colors,
      skin: "rgb(var(--color-skin) / <alpha-value>)",
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
