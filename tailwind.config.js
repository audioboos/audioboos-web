module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      120: '54rem',
    },
    extend: {},
  },
  variants: {
    extend: { display: ['group-hover'], overflow: ['hover', 'focus'] },
  },
  plugins: [require('@tailwindcss/forms')],
};
