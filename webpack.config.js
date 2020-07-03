const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    // [name]: 会被替换，替换成entry里面的key值
    filename: '[name].js'
  },
  module: {
    rules: [
      {test: /\.js$/i, use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }}
    ]
  },
  // 开发时，便于调试
  devtool: 'source-map'
}