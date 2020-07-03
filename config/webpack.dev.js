const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      // template: './index.html'
      // 因为相对路径比较麻烦，现改为绝对路径
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}