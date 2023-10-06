/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-light": "rgb(212, 212, 212)",
        "text-dark": "rgb(77, 77, 77)",
        accent: "rgb(0, 122, 204)",
        "accent-2": "hsl(358, 79%, 66%)",
        bkg: "rgb(30, 30, 30)",
      },
    },
  },
  plugins: [],
};
