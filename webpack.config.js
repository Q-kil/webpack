const path = require('path');
const styleLintPlugin = require('stylelint-webpack-plugin');
const {ESLINT} = require('./config/index');

module.exports = function (env, argv) {
  env = env||{};

  let conf = null;
  if (env.production) {
    conf=require('./config/webpack.prod');
  } else if (env.development) {
    conf=require('./config/webpack.dev');
  } else {
    conf=require('./config/webpack.test');
  }

  return {
    entry: './src/js/index',
    module: {
      rules: [
        // js
        {test: /\.(js|jsx)$/i, use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        ...ESLINT?[{
          loader: 'eslint-loader',
          options: {
            exclude: /node_modules/
          }
        }]:[]
      ]},

        // css
        {test: /\.css$/i, use:['vue-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')
            ]
          }
        }]},

        //less
        {test: /\.less$/i, use: ['style-loader', 'css-loader', 'less-loader']},

        // images
        {test: /\.(png|jpg|gif)$/i, use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',
            limit: 4*1024
          }
        }},

        // fonts
        {test: /\.(eot|svg|ttf|woff|woff2)/i, use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',
            limit: 4*1024
          }
        }},

        // vue
        {test: /\.vue$/i, use: 'vue-loader'}
      ]
    },
    ...conf,
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm',
        '@': path.resolve(__dirname, './src/js/')
      }
    }
  }
}
