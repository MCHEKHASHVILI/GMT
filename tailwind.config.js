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
        '3xl': '1848px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '2.5rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
        '3xl': '6.5rem',
        '4xl': '7.5rem',
      },
    },
    extend: {
      screens: {
        xs: "374px",
        '3xl': "1919px",
      },
      // container: {
      //   screens: {
      //     xs: "375px",
      //   },
      // },
      colors: {
        'link-active': '#D3B266',
      },
      fontFamily: {
        'sans': ['Simplo', ...defaultTheme.fontFamily.sans],
      },
      width: {
        '15': '3.875rem',
      }
    },

  },
  plugins: [],
};