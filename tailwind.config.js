/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        "primary": '#5271FF', 
        "primaryDarker": '#394FEF', 
        "secondary": "#D3D3D4"
      },
      fontFamily: {
        "homeTitle": "'Montserrat', sans-serif",
        "title": "'Inconsolata', monospace"
        ,
      },
      spacing: {
    
      },
      dropShadow: {
        'homeTitle': '0 2px 1px #5271FF'
      }
    },
  },
  plugins: [],
}

