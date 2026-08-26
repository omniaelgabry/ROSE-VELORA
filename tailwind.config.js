/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./product/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pitch-black': '#0a0a0a',
        'warm-beige': '#F5F5DC', // Or perhaps a more refined beige
        'brushed-gold': '#D4AF37',
        'ruby-red': '#9B111E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
