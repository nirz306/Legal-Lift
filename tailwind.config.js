 

const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        galada: ['"Galada"', 'cursive'],
      },
      screens:{
        'sm': '600px',
      },
      padding: {
        'custom-sm': '20px', // Custom padding value
      },
      colors:{
        'legal-green':'#A1C398',
        'legal-pastel-red':'#FA7070',
        'legal-yellow':'#F8F8DC'

      }
    },
  },
  plugins: [],
}