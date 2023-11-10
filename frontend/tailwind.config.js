/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

  ],

  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 4px 60px 20px rgba(0, 0, 0, 0.4)',
      }
    }
  },

  theme: {
    screens: {
      'tablet': '320px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}