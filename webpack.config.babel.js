'use strict';

import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: {
        demo: './demo/src/demo.js',
        'documental.image.viewer': './src/documental.image.viewer.directive.js'
    },
    output: {
        path: __dirname + '/demo',
        filename: '[name]_bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: [
                __dirname + '/demo/src',
                __dirname + '/src'
            ]
        }, {
            test: /\.scss$/,
            include: [
                __dirname + '/demo/src/sass',
                __dirname + '/src/style'
            ],
            loader: 'style!css!sass'
        }, {
            test: /\.jade$/,
            loader: 'jade',
            include: [
                __dirname + '/demo/src',
                __dirname + '/src'
            ],
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        chunksSortMode: (a) => {
            return a.names[0] === 'demo' ? 1 : -1;
        },
        template: './demo/src/index.jade',
        minify: {
            preserveLineBreaks: true
        }
    })]
};
