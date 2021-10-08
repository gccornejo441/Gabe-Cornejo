module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "camp-green": "#3C6858",
      },
      backgroundImage: theme => ({
        'green-background': "url('/green-background.png')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
