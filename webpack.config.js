const path = require('path');
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    contentBase: 'src', // 指定托管的根目录
    hot: true // 启用热更新 的 第1步
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
      filename: 'index.html'
    })
  ],
  module: {
    rules: [ // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=5000&[hash=8]-name=[name].[ext]'] },
      { test: /\.(svg|woff|woff2|ttf|eot)$/, use: ['url-loader'] },
      { test: /\.js$/, use:'babel-loader', exclude: /node_modules/},
      { test:/\.vue$/,use:['vue-loader']}
    ]
  },
  resolve:{
    alias:{
        "vue$":"vue/dist/vue.js"
    }
  }
}