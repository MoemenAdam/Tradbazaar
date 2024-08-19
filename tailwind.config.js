/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#E8A328',
        'secondary': '#482611',
      },
      screens: {
        xs: '430px',
        xs2: '500px',
        md2: '1040px',
        lg2: '1200px',
        xl3: '1350px',
        xl4: '1770px',
      },
    },
  },
  plugins: [],
}

