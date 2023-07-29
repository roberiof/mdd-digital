/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        "primary": '#5271FF', 
        "secondary": "#D3D3D4"
      },
      fontFamily: {
        "homeTitle": "'Montserrat', sans-serif",
        "title": "'JetBrains Mono', monospace",
      },
      spacing: {
    
      }
    },
  },
  plugins: [],
}

