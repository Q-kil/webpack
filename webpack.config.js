const path = require('path');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    news: './src/news.js'
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    // [name]: 会被替换，替换成entry里面的key值
    filename: '[name].js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'test_copy_plugin.js', to: path.resolve(__dirname, 'dest') }
      ]
    })
  ]
}