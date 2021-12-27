const TailWindcssForm = require('@tailwindcss/forms')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],    
  theme: {
    extend: {
      height: {
        '200': '13rem',
      }      
    },
  },
  plugins: [TailWindcssForm],
}
