module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    require('postcss-import'),
    require('postcss-size'),
    require('postcss-font-magician')
  ],
}
