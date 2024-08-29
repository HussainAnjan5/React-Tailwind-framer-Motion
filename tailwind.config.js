/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: ["poppins"],
    },
    colors: {
      primary:"#f7ba34",
        secondary:"#69A79C",
        light:"#f7f7f7",
        white:"#ffffff",
        dark:"#333333",
        dark2:"#999999",
    },
    container: {
      center:true,
      padding:{
        default: "1rem",
        sm:"2rem",
        lg:"4rem",
        xl:"5rem",
        "2xl":"6rem",

      },
      
    },
  },
  plugins: [],
}

