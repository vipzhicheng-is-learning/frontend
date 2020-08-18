## 1、最简单的示例

安装依赖

```
npm i -g webpack webpack-cli
```


```
npx webpack --config 01/webpack.config.js
```

## 2、体验 `file-loader`

安装依赖

```
npm install file-loader -D
```

实际上 `file-loader` 处理后，导入的是文件的相对路径。

官方文档：https://www.webpackjs.com/loaders/file-loader/

```
npx webpack --config 02/webpack.config.js
```

## 3、体验 `url-loader`

安装依赖：

```
npm install url-loader -D
```

`url-loader` 和 `file-loader` 唯一的区别就在于，要打包的图片是否会打包到images目录下，还是以Base64格式打包到bundle.js文件中，这个就看limit配置项了。

当你打包的图片大小比limit配置的参数大，那么跟file-loader一样。
当图片较小时，那么就会以Base64打包到bundle.js文件中。

官方文档：https://www.webpackjs.com/loaders/url-loader/

```
npx webpack --config 03/webpack.config.js
```

## 4、体验 `css-loader` 和 `style-loader`

安装依赖：

```
npm install css-loader style-loader -D
```

* `css-loader` 负责识别 `css` 类型扩展名的导入
* `style-loader` 负责把导入的样式用 `style` 标签插入到 index.html 中

注意：

* 样式插入到 index.html 是在执行 `bundle.js` 时生效的。
* `bundle` 应该在 `body` 标签的底部插入。

```
npx webpack --config 04/webpack.config.js
```

## 5、体验 `sass-loader`