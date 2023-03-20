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
        slideportada: 'url(/portada.jpg)',
        slide1 : 'url(/slide.png)',
        slide2 : 'url(/slide2.png)',
        slide3 : 'url(/slide3.png)',
        slide4 : 'url(/slide4.png)',
        'poker-bg' : 'url(/poker-cover.png)',
      }
    },
  },
  plugins: [],
}
