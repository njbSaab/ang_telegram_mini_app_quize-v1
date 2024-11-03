/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Все HTML и TypeScript файлы в src
  ],
  theme: {
    extend: {
      colors: {
        "bright-blue": "var(--bright-blue)",
        "electric-violet": "var(--electric-violet)",
        "french-violet": "var(--french-violet)",
        "vivid-pink": "var(--vivid-pink)",
        "hot-red": "var(--hot-red)",
        "orange-red": "var(--orange-red)",
        "gray-900": "var(--gray-900)",
        "gray-700": "var(--gray-700)",
        "gray-400": "var(--gray-400)",
      },
      backgroundImage: {
        "vertical-gradient": "var(--red-to-pink-to-purple-vertical-gradient)",
        "horizontal-gradient":
          "var(--red-to-pink-to-purple-horizontal-gradient)",
        "purple-gradient": "var(--purple-vertical-gradient)",
        "top-purple-gradient": "var(--top-purple-vertical-gradient)",
        "purple-gradient": "var(--purple-horizontal-gradient)",
      },
    },
  },
  plugins: [],
};
