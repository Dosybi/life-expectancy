/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        52: 'repeat(52, minmax(0, 1fr))',
        53: 'repeat(53, minmax(0, 1fr))',
      },
      width: {
        '1/10': '10%',
      },
    },
  },
  plugins: [require('daisyui')],
}
