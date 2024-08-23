/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:"#3f1fdc",
        yellowcolor:"#ffa500",
        purplecolor:"#711095",
        irisBluecolor:"#71fff5",
        headingcolor:"#181A1E",
        textColor:"#4E545F",
      },

      boxShadow:{
          panelShadow:"rgba(17,12,46,0.15) 0 48px 100px 0;",
      },
    },

  },
  plugins: [],
}

