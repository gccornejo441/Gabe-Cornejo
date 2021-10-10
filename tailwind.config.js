module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "camp-green": "#3C6858",
        "creme-purp": "#0720FF",
        "mac-purple": "#363BB6",
      },
      backgroundImage: theme => ({
        'purple-background': "url('/images/purple-background.svg')",
       }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
