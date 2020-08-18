const path = require('path')

module.exports = {
  mode: 'development',
  entry: './04/index.js',
  module: { // 不支持的格式就去模块规则里去匹配
    rules: [{
      test: /\.(png|jpg|gif)$/, // 匹配到格式之后，就需要对应的 Loader
      use: {
        loader: 'url-loader',
        options: {
          // name就是原始名称,hash使用的是MD5算法,ext就是后缀
          name: '[name]_[hash].[ext]', // 配置文件名
          outputPath: 'images/', // 配置输出路径
          limit : 102400  //100KB
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }
}