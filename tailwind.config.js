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
          dimmed: 'var(--clr-primary-dimmed)',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/shape-hero-section.svg')",
      },
      zIndex: {
        '-1': '-1',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
    variants: {
      extend: {
        backgroundOpacity: ['hover'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
