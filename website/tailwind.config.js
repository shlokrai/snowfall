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
          50: 'rgb(var(--color-brand-50) / <alpha-value>)',
          200: 'rgb(var(--color-brand-200) / <alpha-value>)',
          400: 'rgb(var(--color-brand-400) / <alpha-value>)',
          600: 'rgb(var(--color-brand-600) / <alpha-value>)',
          800: 'rgb(var(--color-brand-800) / <alpha-value>)',
          900: 'rgb(var(--color-brand-900) / <alpha-value>)',
          950: 'rgb(var(--color-brand-950) / <alpha-value>)',
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
        'currency-fall': 'currencyFall linear infinite forwards',
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
        },
        currencyFall: {
          '0%': { transform: 'translateY(-10vh) translateX(-10px) rotate(-15deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) translateX(20px) rotate(15deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
