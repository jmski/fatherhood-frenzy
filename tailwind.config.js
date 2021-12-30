const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lexend", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      fontFamily: ["hover", "focus"],
    },
  },
  options: {
    fontFace: true,
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
