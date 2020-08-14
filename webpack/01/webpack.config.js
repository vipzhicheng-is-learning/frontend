const path = require('path')
module.exports = {
  mode: 'development', // 默认是 production,主要控制是否压缩输出
  entry: './01/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }
}