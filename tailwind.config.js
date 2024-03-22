/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navBg: "#252525",
        grayPrimary: "#f2f2f2",
        grayPrimary2: "#cccccc",
        grayPrimary3: "#f9f9f9",
        grayPrimary4: "#cacaca",
        grayPrimary5: "#a4a4a4",
        grayPrimary6: "#f6f6f6",
        grayPrimary7: "#e6e6e6",
        greenPrimary1: "#48c884",
        yellowPrimary: "#ffd027",
        orangePrimary: "#fe4922",
        blackPrimary: "#0d0d0d",
        borderPrimary: "#ededed",
        borderPrimary2: "#302f2f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
