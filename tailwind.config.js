/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        primary: {
          DEFAULT: 'var(--clr-primary)',
          light: 'var(--clr-primary-light)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
