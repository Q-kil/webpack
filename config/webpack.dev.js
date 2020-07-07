const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.vue', '**/*.scss']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    })
  ],
  devtool: 'source-map'
}