/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  "theme": {
    "extend": {
    "colors": {
    "white": "#fff",
    "darkgray": "rgba(171, 171, 171, 0.33)",
    "gray": {
    "100": "#090b1e",
    "200": "rgba(255, 255, 255, 0.33)"
    },
    "whitesmoke": "#eaeaea",
    "lightgray": "#d7d7d7"
    },
    "spacing": {},
    "fontFamily": {
    "inter": "Inter",
      "montserrat": "Montserrat"
     
      
    }
    },
    "fontSize": {
    "sm": "0.88rem",
    "inherit": "inherit"
    }
    },
    
  plugins: [],
}