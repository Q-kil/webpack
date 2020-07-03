const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      // template: './index.html'
      // 因为相对路径比较麻烦，现改为绝对路径
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}