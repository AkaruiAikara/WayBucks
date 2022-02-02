module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blood': '#bd0707',
    },
    fontFamily: {
      'sans': ['Avenir', 'sans-serif'],
      'noto': ['Noto Sans', 'serif'],
      'product': ['Product Sans', 'sans-serif'],
      'inter': ['Inter', 'serif'],
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
  ],
  darkMode: 'class',
}
