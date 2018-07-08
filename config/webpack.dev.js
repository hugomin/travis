const path = require('path');
const webpack = require('webpack');
const webpackCommon = require('../webpack.config');
const merge = require('webpack-merge');
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
    
    module: {

    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "../build"),//提供内容的目录
        compress: true,//启用压缩
        port: 8085,//服务器端口
        hot: true,//模块热替换特性
        //lazy:true,//只有在请求是才编译
        proxy: {
            "/opsRegionHealth": {
                target: "http://10.254.188.54:8080",
            }
        },
        clientLogLevel: "warning",
        //process  查看进度 只能显示在控制台
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin(),//热模块更新  浏览器自动刷新 
    ]
}
);