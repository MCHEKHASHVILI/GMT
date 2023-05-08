/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // '2xl': {'max': '1535px'},
        // 'xl': {'max': '1279px'},
        // 'lg': {'max': '1023px'},
        // 'md': {'max': '767px'},
        // 'sm': {'max': '639px'},
      },
    },
    fontFamily: {
      fancyFont: ["Pacifico", "cursive"],
      mainFont: ["PT Serif", "serif"],
      hel_light: "hel-light",
      hel_roman: "hel-roman",
      hel_medium: "hel-medium",
      hel_bold: "hel-bold",
      hel_heavy: "hel-heavy",
      hel_black: "hel-black",
    },
  },
  plugins: [],
};
