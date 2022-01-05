module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue", 'node_modules/vue-tailwind/dist/*.js'],
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  mode: 'jit',
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
