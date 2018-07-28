const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
	output: {
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map.js',
    path: path.join(__dirname, '/dist/')
	},
  entry: './src/index.tsx',
  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['src', 'node_modules']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      { test: /\.(sa|sc|c)ss$/, use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader' ] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },

  devServer: {
    historyApiFallback: true,
    overlay: true,
    port: 8082,
    stats: {
      color: true
    },
    proxy: {
      '/api/*': {
        target: 'http://localhost:5000/',
        changeOrigin: true
      }
    }
  }
};