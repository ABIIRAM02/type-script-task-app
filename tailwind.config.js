/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myRose:'#E63946',
        myWhite:'#F1FAEE',
        myBlue:'#81B29A',
        myYellow:'#F2CC8F',
      },
      fontFamily:{
        head: 'Honk',
        body: 'Poppins'
      }
    },
  },
  plugins: [],
}