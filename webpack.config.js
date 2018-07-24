const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const jsOutputDirectory = 'js';
const output = {
  path: path.join(__dirname, '/dist/'),
  filename: `${jsOutputDirectory}/[name].js`,
  chunkFilename: `${jsOutputDirectory}/[name].js`,
  publicPath: '/'
}

module.exports = {
  output,
  mode: 'development',
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
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true, localIdentName: '[local]_[hash:base64:4]' } },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.(sass|scss)$/i,
        use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },

  devServer: {
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
