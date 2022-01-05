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
    extend: {
      scale: {
        "-1": "-1",
      },
      flex: {
        2: "2",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      minWidth: {
        "4xs": "4rem",
        "3xs": "8rem",
        "2xs": "12rem",
        "1xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
      minHeight: {
        "4xs": "4rem",
        "3xs": "8rem",
        "2xs": "12rem",
        "1xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
      backgroundImage: {
        showdown: "url('../public/images/showdown-bg.jpg')",
      },
    },
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
