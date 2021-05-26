module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "m-orange": "#ffaa23",
        "m-blue": "#0E9DD9",
        "m-tiny-blue": "#EEFAFF",
        "m-black": "#1B262C",
        "m-ash": "#737373",
        "m-red": "#ff9e9e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
