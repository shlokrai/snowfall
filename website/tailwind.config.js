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
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'snow-1': 'snowFall 2s linear infinite',
        'snow-2': 'snowFall 2.5s linear infinite 0.5s',
        'snow-3': 'snowFall 2.2s linear infinite 1.2s',
        'snow-4': 'snowFall 3s linear infinite 0.8s',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        snowFall: {
          '0%': { transform: 'translateY(-10px) translateX(0)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateY(110px) translateX(-15px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
