module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
