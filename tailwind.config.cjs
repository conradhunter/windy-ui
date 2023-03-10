/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'monospace': ['"Menlo"', '"Monaco"', '"Courier New"', 'monospace']
      }
    },
  },
  plugins: [],
};
