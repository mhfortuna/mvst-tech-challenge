const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      bitter: ["Bitter", "serif", "system-ui"],
      roboto: ["Roboto", "serif", "system-ui"],
    },
    extend: {
      colors: {
        gray: "#373838",
        coolGray: colors.coolGray,
        gray3: "#828282",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
