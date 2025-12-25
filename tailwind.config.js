/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "priColor": "#0D1027",
        "colorBg":"#FAFBFF"
      },
      fontFamily: {
        sans: ["Raleway", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-btn": "linear-gradient(to bottom, #0057FF, #A0A7E6)",
        "bg-pattern": "url('/bg.png')",
      },
    },
  },
  plugins: [],
};
