/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#008195',
        secondary: '#0f8775',
        accent: '#f0f3bd',
        'dark-blue': '#22577a',
        'light-green': '#c7f9cc',
      },
      backgroundImage: {
        'gradient-radial': 'linear-gradient(to right, #2c3e50, #4ca1af)',
      },
    },
  },
  plugins: [],
}

