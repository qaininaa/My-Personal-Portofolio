/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'poppins': ['Poppins']
      },
      colors: {
        'primary': '#1e293b',
        'secondary': '#0369a1'
      }
    },
  },
  plugins: [],
}

