/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1814',
        paper: '#f5f2ed',
        stone: '#c8c3bb',
        accent: '#c9603a',
        mid: '#7a7570',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'none' },
        }
      },
      animation: {
        fadeUp: 'fadeUp .25s ease',
      }
    },
  },
  plugins: [],
}
