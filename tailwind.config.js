module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
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
      screens: {
        "1.5xl": "1440px",

        "3xl": "2300px",
      },
      width: {
        1440: "1440px",
        1536: "1536px",
      },
      lineHeight: {
        'extra-loose': '1.25',
        '12': '1.4',
       },
       fontSize: {
        "7.5xl": ['5rem', '1.2'],
        "4.5xl": ['2.5rem', '1.2'],
        "4.7xl": ['2.85rem', '1.2'],
        "6.5xl": ['3.75rem', '1.2'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
