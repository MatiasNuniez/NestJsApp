/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-green': 'inset 0 0 10px 2px rgba(0, 255, 0, 0.7)',
      },
    },
  },
  plugins: [],
}