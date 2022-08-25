/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkshire: ['"Berkshire Swash"'],
      },
      backgroundColor: {
        paper: "rgb(193,171,139)",
      },
    },
  },
  plugins: [],
  important: true,
};
