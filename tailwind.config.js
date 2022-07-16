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
        primary: '#454d66',
        secondary : '#309975',
        bgp : '#f7f7f7',
        alt : '#58b368'
      },
      screens: {
        xs: { min: '320px', max: '481px' },
  
        sm: { min: '481px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        md: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        lg: { min: '1024px', max: '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        xl: { min: '1280px', max: '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': { min: '1536px' },
      },
    },
  },
  plugins: [],
}
