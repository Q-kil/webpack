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
      // 规则满足该正则，用use
      // loader 可以配合使用
      // loader 是有顺序的，从后往前执行（后面产出的结果给前面的loader）
      // css-loader: 负责读取解析，压缩css，解析出来变成js字符串
      // style-loader: 可以把样式输出到标签里面
      {test: /\.css$/i, use: [
        'style-loader',
        'css-loader',
        // 'postcss-loader'
        // postcss.config.js 内容迁移
        {
          // postcss-loader: 加前缀
          loader: 'postcss-loader',
          options: {
            plugins: [
              // autoprefixer: 提供配置信息
              require('autoprefixer')
            ]
          }
        }
      ]},
      /*{test: /\.(jpg|png|gif)$/i, use: {
        loader: 'file-loader',
        options: {
          outputPath: 'imgs', //相对路径  相对于output.path
          publicPath: 'dest/imgs/'
        }
      }}*/
      {test: /\.(jpg|png|gif)$/i, use: {
        loader: 'url-loader',
        options: {
          outputPath: 'imgs', //相对路径  相对于output.path
          publicPath: 'dest/imgs/',
          limit: 40*1024
        }
      }},
      // 字体文件
      {test: /\.(eot|svg|ttf|woff|woff2)$/i, use: {
        loader: 'url-loader',
        options: {
          outputPath: 'fonts/',
          publicPath: 'dest/fonts',
          limit: 4*1024
        }
      }}
    ]
  }
}