module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      120: '54rem',
    },
    extend: {
      fontFamily: {
        Sarabun: ['"Sarabun"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: { display: ['group-hover'], overflow: ['hover', 'focus'] },
  },
  plugins: [require('@tailwindcss/forms')],
};
