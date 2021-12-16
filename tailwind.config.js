module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primaryColor: "#FB6C37",
        secondaryColor: "#FF5107",
        tertiaryColor: "#FFC700",
        colorHeading: "#00004A",
        colorParagraph: "#6B6B81",
      },
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
