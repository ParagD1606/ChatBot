/** @type {import('tailwindcss').Config} */
export default {
  // Enable class-based dark mode so we can toggle by adding/removing "dark" on <html>
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
}
