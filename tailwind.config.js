/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      // default breakpoints but with 40px removed
      screens: {
        '2xl': '1640px',
      },
    },
    extend: {
      
      screens: {
        // '2xl': {'max': '1535px'},
        // 'xl': {'max': '1279px'},
        // 'lg': {'max': '1023px'},
        // 'md': {'max': '767px'},
        // 'sm': {'max': '639px'},
      },
      colors: {
        'link-active': '#D3B266',
      },
      fontFamily: {
        'sans-serif': ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
        // fancyFont: ["Pacifico", "cursive"],
        // mainFont: ["PT Serif", "serif"],
        // hel_light: "hel-light",
        // hel_roman: "hel-roman",
        // hel_medium: "hel-medium",
        // hel_bold: "hel-bold",
        // hel_heavy: "hel-heavy",
        // hel_black: "hel-black",
      },
      width: {
        '15': '3.875rem',
      }
    },
   
  },
  plugins: [],
};
