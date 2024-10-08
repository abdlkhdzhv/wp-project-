const path = require('path');
const { Template } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html')
  })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|svg|jpg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: 'development',
};

