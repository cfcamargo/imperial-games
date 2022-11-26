/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    fontFamily : {
      'sans' : ['Inter', 'sans-serif'],
    },
    extend: {
      colors : {
        'dark-green' : '#010B0A',
        'light-green' : '#091C1A',
        'dark-yellow': '#FDD708',
        'light-yellow' : '#FAF8C1'
      },
      screens : {
        'xs': '360px'
      },
      backgroundImage : {
        slide1 : 'url(./public/slide.png)',
        slide2 : 'url(./public/slide2.png)',
        slide3 : 'url(./public/slide3.png)'
      }
    },
  },
  plugins: [],
}
