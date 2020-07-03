const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  // 模块; webpack 工作的时候需要其他模块帮忙
  module: {
    // 规则
    rules: [
      {test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader']}
    ]
  }
}