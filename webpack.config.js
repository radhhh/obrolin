const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", 
  entry:{
      display: "./src/scripts/display.js",
      query: "./src/scripts/query.js",
      ai: "./src/scripts/ai.js",
      tts: "./src/scripts/tts.js",
      main: "./src/scripts/main.js",
  },
  devtool: "inline-source-map",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Obrolin',
      template: './src/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};