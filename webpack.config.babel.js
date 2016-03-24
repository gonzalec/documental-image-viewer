/* jshint node: true */

'use strict';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractWebpackPlugin from 'extract-text-webpack-plugin';

var production = process.env.NODE_ENV === 'production';
var plugins = [];

// default/demo plugins
if (!production) {
    plugins = plugins.concat([
        // This plugin clean the specified folders
        new CleanWebpackPlugin('demo', {
            dry: false,
            verbose: true
        }),

        // This plugin extract every require("style.css") in entry chunks
        // into a separate css output file.
        new ExtractWebpackPlugin('[name].css'),

        // This plugin simplifies creation of HTML files to serve your
        // webpack bundles.
        new HtmlWebpackPlugin({
            chunksSortMode: (a) => {
                return a.names[0] !== 'demo' ? 1 : -1;
            },
            template: './demo_src/index.jade',
            minify: {
                preserveLineBreaks: true
            }
        })
    ]);
}

// production plugins
if (production) {
    plugins = plugins.concat([
        // This plugin clean the specified folders
        new CleanWebpackPlugin(['dist', 'builds'])
    ]);
}

module.exports = {
    entry: {
        demo: './demo_src/demo.js',
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
                __dirname + '/demo_src',
                __dirname + '/src'
            ]
        }, {
            test: /\.scss$/,
            include: [
                __dirname + '/demo_src/styles',
                __dirname + '/src/styles'
            ],
            loader: ExtractWebpackPlugin.extract('style', 'css!sass')
        }, {
            test: /\.jade$/,
            loader: 'jade',
            include: [
                __dirname + '/demo_src',
                __dirname + '/src'
            ],
        }]
    },
    plugins: plugins
};
