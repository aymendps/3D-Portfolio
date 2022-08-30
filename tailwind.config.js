/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-brown": "rgb(63,44,35)",
      },
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
      borderColor: {
        paper: "rgb(193,171,139)",
      },
    },
  },
  plugins: [],
  important: true,
};
