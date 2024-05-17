/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        accent: "#D90429",
        navyColor: "#003049",
        sectionColor: "#212529",
        pColor: "#3E5C76",
        
      }
    },
  },
  plugins: [],
};
