// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  content: [
    './src/components/**/*.{js,css}',
    './src/pages/**/*.{js,css}'
  ],
  variants: {
    opacity: ['disabled'],
    cursor: ['disabled'],
  },
  theme: {
    extend: {
      fontFamily: {
        'brown-sunflower': ['brown-sunflower', 'serif'],
        'montserrat-regular': ['montserrat-regular', 'sans']
      },
      colors: {
        'golden-bg': { DEFAULT: '#C6A87A' },
        'golden': { DEFAULT: '#CDAE7F' },
        'gray': { DEFAULT: '#504E4E' }
      }
    }
  }
};