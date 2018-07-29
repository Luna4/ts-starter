const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html', inject: 'body', filename: 'index.html' })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        modules: ['src', 'node_modules']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    }
};
