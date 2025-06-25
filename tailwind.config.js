/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // for Vite
    "./**/*.{js,ts,jsx,tsx}" // for CRA or Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
