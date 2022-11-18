/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    fontFamily : {
      'sans' : ['Inter', 'sans-serif'],
    },
    extend: {
      screens : {
        'xs': '360px'
      },
    },
  },
  plugins: [],
}
