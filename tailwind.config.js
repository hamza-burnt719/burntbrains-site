const { colors } = require('./utils/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.Cinder,
        secondary: colors.Gamboge
      },
    },
  },
  plugins: [],
}

