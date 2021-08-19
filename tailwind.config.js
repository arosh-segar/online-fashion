module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        100: "100px",
        150: "150px",
        200: "200px",
        250: "250px",
        300: "300px",
        500: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
