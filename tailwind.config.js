/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        Calistoga: "Calistoga",
      },
      colors: {
        bkg: "rgb(30, 30, 30)",
        "bkg-light": "rgb(141, 141, 141)",
        "text-light": "rgb(212, 212, 212)",
        "text-dark": "rgb(57, 57, 57)",
        accent: "rgb(0, 122, 204)",
        "accent-2": "hsl(358, 79%, 66%)",
        "accent-3": "hsl(41, 79%, 66%)",
        "accent-4": "hsl(0, 67%, 38%)",
      },
    },
  },
  plugins: [],
};
