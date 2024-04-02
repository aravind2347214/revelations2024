/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '426px',
      'sm': '626px',
      'md': '826px',
      'lg': '1026px',
      'xl': '1826px',
      '2xl': '2226px',
      // => @media (min-width: 640px) { ... }
    },
  },
 
  plugins: [],
}

