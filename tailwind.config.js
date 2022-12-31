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
        "my-orange-brown-30": "rgba(166,110,27,0.3)",
      },
      backgroundImage: {
        "paper-image":
          "url('../public/assets/models/office/textures/old_paper_baseColor.png')",
        "me-drawn-image": "url('../public/assets/images/me-with-shadow.png')",
        "orange-sticker": "url('../public/assets/images/orange-sticker.png')",
        "yellow-sticker": "url('../public/assets/images/yellow-sticker.png')",
        "certificate-1": "url('../public/assets/images/coursera-scrum.png')",
        "certificate-2": "url('../public/assets/images/RH124.jpg')",
      },
      backgroundSize: {
        "size-25%": "25%",
      },
      borderColor: {
        paper: "rgb(193,171,139)",
      },
    },
    screens: {
      oldpc: { max: "1468px" },
    },
  },
  plugins: [],
  important: true,
};
