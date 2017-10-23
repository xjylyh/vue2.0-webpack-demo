const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");//它会自动帮你生成一个 html 文件，并且引用相关的 assets 文件(如 css, js)
const webpack = require('webpack');

var config = {
    entry:path.resolve(__dirname,'./app/index/index.js'),//入口文件
    output:{
        path:path.resolve(__dirname,'./output/static'),//输出文件
        publicPath:'/',
        filename:'[name].[hash].js',
        chunkFilename:'[id].[chunkhash].js'
    },
    devtool:'inline-source-map',
    devServer:{//开发服务器
        hot:true,//热重载模块开启
        port:9999,//监听端口
        openPage: 'app/index/index.html'//服务器开启打开的页面
    },
    module:{
        rules:[//loaders
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
    resolve:{//分解
        extensions:[' ','.js','.vue'],//扩展名
        alias:{//alias别名，化名
            'Vue':'vue/dist/vue.js'
        }
    },//resolve
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//webpack热重载插件
        new HtmlWebpackPlugin({//用来处理html的插件，html的生成以及内容的引用
            filename:'./app/index/index.html',
            template:path.resolve(__dirname,'./app/index/index.html'),//使用的模版文件
            inject:true//注入
        })
    ]
}

module.exports = config;