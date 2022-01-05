module.exports = {
  purge: [
    "./public/**/*.html",
    "./src/**/*.vue",
    "node_modules/vue-tailwind/dist/*.js",
  ],
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  mode: "jit",
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: { max: "1450px" },
      lg: { max: "1350px" },
      md: { max: "990px" },
      sm: { max: "760px" },
      xs: { max: "550px" },
      xxs: { max: "350px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
