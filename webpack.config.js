//绝对路径引入node.js里自带的api
const path = require("path")

//插件包 打包把文件放进html里
const HtmlWebpackPlugin = require("html-webpack-plugin")
//插件包 自动删除dist再添加
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//插件包 
const webpack = require("webpack")

var env = process.env.NODE_ENV


var config = {
    //生产环境，打包上线
    mode: 'production',
    //入口
    entry: {
        //相对路径
        main: "./src/main.js"
    },
    //解决报错
    devtool: 'inline-source-map',  // 加上对应的配置
    //出口
    output: {
        //打包的名字，必须是绝对路径
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, './dist')
    },
    //插件
    plugins: [
        //打包把文件放进指定的html里
        new HtmlWebpackPlugin({
            title: "我们快毕业了",
            //在index.html  title标签加上<%= htmlWebpackPlugin.options.title %>
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new CleanWebpackPlugin(),
        
    ],
    //loader.打包模块
    module: {
        rules: [
            //判断结尾是否位css或是scss
            { test: /\.(scss|css)$/, use: ["style-loader", "css-loader", "sass-loader"] },
            //检测是否为以这些图片格式结尾
            { test: /\.（png|jpg|gif|svg）$/, use: ["file-loader"] },
            //所有js文件必须使用babel进行编译，兼容，ES6转换ES5,exclude表示不包含
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
        ]
    },
    //别名
    resolve: {
        //别名
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    },
}
//判断开发环境
if (env == "development") {
    //开发环境
    config.mode="development",
    //热更新
    config.plugins.push(new webpack.NamedModulesPlugin()),
    config.plugins.push(new webpack.HotModuleReplacementPlugin()),
    //本地服务
    config.devServer={
        //端口号
        port: 8000,
        //在url可以拼接可以显示图片。静态资源目录
        contentBase: path.resolve(__dirname, "./public"),
        //启动项目自动打开浏览器
        open: true,
        //开启热更新
        hot: true,
        overlay: {
            // warnings: true,
            errors: true//报错是的浮层
          }
    },
    config.module.rules.push({
        test:/\.js$/,
        exclude:/node_modlues/,
        use: ["eslint-loader"],
        enforce:"pre"//在babel转义之前先执行
    })
}
module.exports = config
