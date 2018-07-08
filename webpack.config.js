const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.es6$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {  
                            "presets": ["env"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              }
        ]
    },
    plugins:[
        new ExtractTextPlugin('public/css/[name]-[hash:5].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor', // 函数库。
            filename: 'public/script/common/vendor-[hash:5].min.js'
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: 'src/widget/layout.html',
            inject:false
        }),
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: 'src/views/index.js',
            inject:false,
            chunks:['vendor','index','tag']
        }),
        new HtmlWebpackPlugin({
            filename: './widget/index.html',
            template: 'src/widget/index.html',
            inject:false
        })
    ]
}