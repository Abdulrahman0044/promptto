/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // for Vite
    "./**/*.{js,ts,jsx,tsx}", // for CRA or Next.js
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        // gradient btn background
        "gradient-btn": "linear-gradient(to bottom, #0057FF, #A0A7E6)",
        "bg-pattern": "url(/bg.png)"
      },
    },
  },
  plugins: [],
};
