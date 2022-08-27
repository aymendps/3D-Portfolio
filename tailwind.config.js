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
      backgroundImage: {
        "paper-image":
          "url('../public/assets/models/office/textures/old_paper_baseColor.png')",
      },
      backgroundSize: {
        "size-25%": "25%",
      },
    },
  },
  plugins: [],
  important: true,
};
