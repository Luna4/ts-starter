const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } })
    ],
    module: {
        rules: [
            { test: /\.(sa|sc|c)ss$/, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] }
        ]
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        overlay: true,
        stats: { color: true },
        port: 8082,
        proxy: {
            '/api/*': { target: 'http://localhost:5000/', changeOrigin: true }
        }
    }
});