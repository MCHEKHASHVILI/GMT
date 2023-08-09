/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        '2xl': '1536px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      // screens: {
      //   xs: "375px",
      // },
      // container: {
      //   screens: {
      //     xs: "375px",
      //   },
      // },
      colors: {
        'link-active': '#D3B266',
      },
      fontFamily: {
        'sans': ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '15': '3.875rem',
      }
    },

  },
  plugins: [],
};