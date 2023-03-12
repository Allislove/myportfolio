/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '5rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
