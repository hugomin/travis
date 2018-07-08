const path = require('path');
const webpack = require('webpack');
const webpackCommon = require('../webpack.config');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = merge(webpackCommon, {
    entry: {
        index: [
            path.join(__dirname, '../src/public/script/index.es6'),
            path.join(__dirname, '../src/public/script/indexadd.es6')
        ],
        tag: [
            path.join(__dirname, '../src/public/script/tag.es6')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: 'public/script/[name]-[hash:5].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({//压缩
            output: {
                comments: false
            },
            sourceMap: false,
            compress: {
                warnings: true
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
          })
    ]
});