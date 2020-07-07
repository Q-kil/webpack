const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dest'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.vue', '**/*.scss']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}