const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width':'width',
      },
    },
    colors:{
      ...colors,
      skin:"rgb(var(--color-skin) / <alpha-value>)"
    }
  },
  plugins: [],
};
