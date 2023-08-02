/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        "primary": '#5271FF', 
        "primaryDarker": '#0464ff', 
        "outBodyColor": '#394FEF', 
        "secondary": "#D3D3D4"
      },
      fontFamily: {
        // ['"Press Start 2P"', 'cursive']
        "homeTitle": ['"Montserrat"', 'sans-serif'],
        "title": "'Inconsolata', monospace"
        ,
      },
      height: {
        '150': '150vh',
      },
      dropShadow: {
        'homeTitle': '0 2px 1px #5271FF'
      }
    },
  },
  plugins: [],
}

