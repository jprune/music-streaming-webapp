/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1F222B',
        'neon-green': '#5FE85D',
        'deep-violet': '#8070FF',
      },
    },
  },
  plugins: [],
}
