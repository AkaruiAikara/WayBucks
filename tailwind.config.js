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
    }
  },
  plugins: [
    require('@themesberg/flowbite/plugin'),
  ],
  darkMode: 'class',
}
