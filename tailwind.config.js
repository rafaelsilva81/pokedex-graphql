/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pokemon: ["Pokemon", "sans-serif"],
      },
      colors: {
        "fire": "#F08030",
        "grass": "#78C850",
        "water": "#6890F0",
        "electric": "#F8D030",
        "normal": "#A8A878",
        "ground": "#E0C068",
        "fairy": "#EE99AC",
        "poison": "#A040A0",
        "bug": "#A8B820",
        "psychic": "#F85888",
        "flying": "#A890F0",
        "fighting": "#C03028",
        "rock": "#B8A038",
        "ghost": "#705898",
        "ice": "#98D8D8",
        "dragon": "#7038F8",
        "dark": "#705848",
        "steel": "#B8B8D0",
      },
      dropShadow: {
        'title': [
          '-1px -1px 0px rgba(30, 58, 138, 1)',
          '1px -1px 0px rgba(30, 58, 138, 1)',
          '-1px 1px 0px rgba(30, 58, 138, 1)',
          '1px 1px 0px rgba(30, 58, 138, 1)'
        ],
        'white': [
          '1px -1px 1px rgba(255, 255, 255, 1)',
          '-1px 1px 1px rgba(255, 255, 255, 1)',
          '1px 1px 1px rgba(255, 255, 255, 1)',
          '-1px -1px 1px rgba(255, 255, 255, 1)'
        ]
      }
    },
  },
  plugins: [],
}
