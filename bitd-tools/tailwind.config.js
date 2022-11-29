/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bitdBlack: '#0D0E13',
        bitdDarkGray: '#3B3C41',
        bitdGray: '#4C4D52',
        bitdLightGray: '#A7A8AA',
        bitdOrange: '#E75B06',
      },
    },
  },
  plugins: [],
};
