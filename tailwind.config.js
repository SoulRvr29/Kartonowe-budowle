/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Calistoga: "Calistoga",
        digit: "digit",
      },
      colors: {
        bkg: "rgb(30, 30, 30)",
        "bkg-light": "rgb(141, 141, 141)",
        "text-light": "rgb(212, 212, 212)",
        "text-dark": "rgb(34, 34, 34)",
        "icon-gray": " rgb(102, 102, 102)",
        accent: "rgb(0, 122, 204)",
        "accent-2": "hsl(358, 79%, 66%)",
        "accent-3": "hsl(41, 79%, 66%)",
        "accent-4": "hsl(0, 67%, 38%)",
      },
    },
  },
  plugins: [],
};
