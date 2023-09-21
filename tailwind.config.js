const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b151d',
        secondary: '#cfc9d6',
        hover: '#f5f4f7',
        banner: '#82babb',
        accent: '#4800A8',
        footer: '#494dbc',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
