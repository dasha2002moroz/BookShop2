const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development'
}
module.exports = {
    output: {
      filename: 'my-first-webpack.bundle.js'
    },
    module: {
      rules: [
        { test: /\.css$/,
         use: [MiniCssExtractPlugin.loader, 'css-loader'] }
      ]
    },
    optimization: {
        minimizer: [
          '...',
          new CssMinimizerPlugin(),
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    mode: 'development'
  };