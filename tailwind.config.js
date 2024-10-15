/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      fontSize: {
        small: "10px",
      },
      colors: {
        customBlue: "#edf2f9",
        customText: "#bbc4cf",
      },
      fontFamily: {
        forte: ["Forte", "sans-serif"],
      },
      boxShadow: {
        custom: "0 0 10px rgba(0, 0, 0, 0.1)", // Bóng tùy chỉnh
      },
      height: {
        85: "340px",
      },
      width: {
        50: "200px",
      },
      minWidth: {
        150: "600px",
        125: "500px",
        75: "300px",
      },
      maxWidth: {
        300: "1200px",
        312.5: "1250px",
        337.5: "1350px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
