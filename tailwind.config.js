/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:"burtons",
      },
      screens: {
        'tablet': {'max': '640px'},
        // => @media (min-width: 640px) { ... }
  
        'laptop': {'max': '1024px'},
        // => @media (min-width: 1024px) { ... }
  
        'desktop': {'max': '1535px'},
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}