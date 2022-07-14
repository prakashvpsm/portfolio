const defaultTheme = require('tailwindcss/defaultTheme')



/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2EC67E',
        secondary : '#ECECEC',
        bgp : '#f7f7f7',
        alt : '#F22D54'
      },
    },
  },
  plugins: [],
}
