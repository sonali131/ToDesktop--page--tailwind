/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary1':'#3238f2',
        'primary':'#ee0181',
        'sonali':'#01ee91'
      },
      fontFamily:{
        'display':['poppins','sans-serif'],
        'sonali':['poppins','sans-serif'],
        'body':['Inter','sans-serif']
      }
    },
  },
  plugins: [],
}

