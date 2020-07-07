const StyleLintPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const {STYLELINT} = require('./index');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    ...STYLELINT?[new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.vue', '**/*.scss']
    })]:[],
    new VueLoaderPlugin()
  ],
  devtool: 'source-map'
}