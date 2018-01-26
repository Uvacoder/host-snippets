const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, 'public/source/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/build/'
    },
    devtool: 'source-map',
    module: {
        rules: [ {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        } ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${process.env.NODE_ENV}'` || '"development"'
            }
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin('main.css')
    ]
};
