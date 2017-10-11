const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

var config = {
    entry:path.resolve(__dirname,'./app/index/index.js'),
    output:{
        path:path.resolve(__dirname,'./output/static'),
        publicPath:'/',
        filename:'[name].[hash].js',
        chunkFilename:'[id].[chunkhash].js'
    },
    devtool:'inline-source-map',
    devServer:{
        hot:true,
        port:9999,
        openPage: 'app/index/index.html'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader?presets=es2015',
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:[' ','.js','.vue'],
        alias:{
            'Vue':'vue/dist/vue.js'
        }
    },//resolve
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'./app/index/index.html',
            template:path.resolve(__dirname,'./app/index/index.html'),
            inject:true
        })
    ]
}

module.exports = config;