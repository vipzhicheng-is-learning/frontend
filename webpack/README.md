## 1、最简单的示例

```
npx webpack 01/index.js
```

## 2、体验 `file-loader`

实际上 `file-loader` 处理后，导入的是文件的相对路径。

官方文档：https://www.webpackjs.com/loaders/file-loader/

```
npx webpack 02/index.js
```

## 3、体验 `url-loader`

`url-loader` 和 `file-loader` 唯一的区别就在于，要打包的图片是否会打包到images目录下，还是以Base64格式打包到bundle.js文件中，这个就看limit配置项了。

当你打包的图片大小比limit配置的参数大，那么跟file-loader一样。
当图片较小时，那么就会以Base64打包到bundle.js文件中。

官方文档：https://www.webpackjs.com/loaders/url-loader/

```
npx webpack 03/index.js
```

## 4、体验 `css-loader`