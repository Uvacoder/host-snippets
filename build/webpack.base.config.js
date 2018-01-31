const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [ {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [ {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                } ]
            })
        } ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
        new ExtractTextPlugin('index.css')
    ]
};
