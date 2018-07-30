const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html', inject: 'body', filename: 'index.html' }),
        /**
         * 404.html will be served if a file is not found. 
         * Used for Single-Page App (SPA) hosting to serve the entry page for http-server.
         * https://github.com/indexzero/http-server/blob/9571d0a84913eb2514d68a9c9600742a0791be83/README.md#magic-files
        */
        new HtmlWebpackPlugin({ template: './index.html', inject: 'body', filename: '404.html' })
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
