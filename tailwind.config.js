/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    fontFamily: {
      'display': ['puffin-display'],
      'body': ['"puffin-display-soft"'],
    },
    extend: {
      screens: { 'sm': { 'max': '640px' } },
      colors: {
        primary: '#3F2B56',
        secondary: '#9e0f6d'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

