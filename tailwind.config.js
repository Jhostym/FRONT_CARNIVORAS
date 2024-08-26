/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        hearBar: "#4a773c",
        Navbar : "#2e5d2b",
        footer : "#2e5d2b",
        footBar : "#4a773c",
      },
    },
  },
  plugins: [],
};
