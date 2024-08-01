/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mgreen: '#007274',
        mblack: '#333333',
      },
      container: {
        center: true,
        padding: '1rem',
        maxWidth: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      },
      transitionDuration: {
        '2000': '2000ms'
      },
    },
  },
  plugins: [],
}
