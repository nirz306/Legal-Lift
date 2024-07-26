// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/components/Home/Home.jsx","./src/components/legal trivia/Quiz2.js"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': '600px',
      },
      padding: {
        'custom-sm': '20px', // Custom padding value
      },
    },
  },
  plugins: [],
}