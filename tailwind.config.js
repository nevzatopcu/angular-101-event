/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        main: 'var(--r-main-color)',
        link: 'var(--r-link-color)',
        selection: 'var(--r-selection-color)'
      }
    },
  },
  plugins: [],
}
