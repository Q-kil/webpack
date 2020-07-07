const StyleLintPlugin = require('stylelint-webpack-plugin');


module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.vue', '**/*.scss']
    })
  ],
  devtool: 'source-map'
}