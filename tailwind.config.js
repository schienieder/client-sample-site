/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./app/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'red' : ["'Red Hat Display'", 'sans-serif']
      },
      colors : {
        'custom-dark' : '#373737',
        'brown1' : '#572F00',
        'brown2' : '#372B00'
      }
    },
  },
  plugins: [],
}
