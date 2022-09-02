/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-brown": "rgb(63,44,35)",
        "my-light-brown": "#8C624F",
        "my-orange-brown": "#A66E1B",
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
        "me-drawn-image": "url('../public/assets/images/me-with-shadow.png')",
        "orange-sticker": "url('../public/assets/images/orange-sticker.png')",
        "yellow-sticker": "url('../public/assets/images/yellow-sticker.png')",
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
