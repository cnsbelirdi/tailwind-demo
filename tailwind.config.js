module.exports = {
  mode: "jit",
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        logo: '#32445a',
        twitter: '#1da1f2'
      },
      spacing: {
        '15': '3.75rem'
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  plugins: [],
}
