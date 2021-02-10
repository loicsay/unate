module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['"IBM Plex Sans"'],
    },
    backgroundColor: {
      primary: "#50B6FF",
      white: "#EEEEEE",
    },
    textColor: {
      white: "#EEEEEE",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
