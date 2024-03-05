/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#fff7f7",
        darkslategray: "#27374d",
        seagreen: "#019673",
        mediumaquamarine: "#26bd99",
        white: "#fff",
        black: "#000",
        lightcyan: "#cdf0ea",
        
        
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
        "8xs": "5px",
        mini: "15px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "3xs": "10px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },}