/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primaryColor: '#8a5e3d',
        cardColor: '#f5f0ed',
        secondaryColor:'#000000',
        lightSecondaryColor: '#1c1c1b',
        greyLight: '#d7dbd8',
        whiteColor: '#FFFFFF',
      }
    },
    fontFamily: {
      'libre-baskerville': ['"Libre Baskerville"', 'serif'],
    }
  },
  plugins: [],
}

