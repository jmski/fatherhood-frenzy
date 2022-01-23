const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx}", "./components/**/*.{js,ts,jsx}"],
  theme: {
    screens: {
      mobile: "330px",
      xs: "475px",
      ...defaultTheme.screens,
    },

    fontFamily: {
      sans: ["Calibre", ...defaultTheme.fontFamily.sans],
      mono: ["SFMono", ...defaultTheme.fontFamily.mono],
      serif: ["Lexend", ...defaultTheme.fontFamily.serif],
    },
    extend: {
      gridColumn: {
        "span-5--1": "5 / -1",
        "span-6--1": "6 / -1",
        "span-7--1": "7 / -1",
        "span-8--1": "8 / -1",

        "span-1-5": "1 / 5",
        "span-1-6": "1 / 6",
        "span-1-7": "1 / 7",
        "span-1-8": "1 / 8",
        "span-1-9": "1 / 9",
      },
      grayscale: {
        50: "50%",
        75: "75%",
      },
      spacing: {
        0.5: "3px",
      },
      scale: {
        "-1": "-1",
      },
      flex: {
        2: "2",
      },
      fontSize: {
        max: "10rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
      },
      height: {
        "1px": "1px",
      },
      width: {
        "1px": "1px",
      },
      maxWidth: {
        "8xl": "100rem",
        60: "15rem",
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
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
        footer: "var(--footer)",
      },
    },
  },
  variants: {
    backgroundImage: ["hover", "focus"],
    fontFamily: ["hover", "focus"],
    alignContent: ["odd", "even"],
    alignItems: ["odd", "even"],
    alignSelf: ["odd", "even"],
    textAlign: ["odd", "even"],
    flexDirection: ["odd", "even"],
    gridColumn: ["odd", "even"],
    gridColumnStart: ["odd", "even"],
    textAlign: ["odd", "even"],
    padding: ["odd", "even"],
    margin: ["odd", "even"],
    justifyContent: ["odd", "even"],
    justifyItems: ["odd", "even"],
    justifySelf: ["odd", "even"],
    extend: {
      backgroundImage: ["hover", "focus"],
      fontFamily: ["hover", "focus"],
      alignContent: ["odd", "even"],
      alignItems: ["odd", "even"],
      alignSelf: ["odd", "even"],
      textAlign: ["odd", "even"],
      flexDirection: ["odd", "even"],
      gridColumn: ["odd", "even"],
      gridColumnStart: ["odd", "even"],
      textAlign: ["odd", "even"],
      padding: ["odd", "even"],
      margin: ["odd", "even"],
      justifyContent: ["odd", "even"],
      justifyItems: ["odd", "even"],
      justifySelf: ["odd", "even"],
    },
  },
  options: {
    fontFace: true,
  },
  plugins: [],
};
