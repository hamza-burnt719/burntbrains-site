const { Colors } = require('./src/utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: Colors.Cinder,
        secondary: Colors.Gamboge
      },
    },
  },
  plugins: [],
}

