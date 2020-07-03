const path = require('path');

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
  }
}