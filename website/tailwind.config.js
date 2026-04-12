/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#DEF5E5',   // Palette Color 1 (Lightest)
          200: '#BCEAD5',  // Palette Color 2
          400: '#9ED5C5',  // Palette Color 3
          600: '#8EC3B0',  // Palette Color 4 (Darkest from image)
          800: '#3D6153',  // Dark accent for readable secondary text
          900: '#233F35',  // Dark accent for readable primary text
          950: '#11221C',  // Deepest dark for bold headings
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
