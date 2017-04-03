# express-demo
Express的学习记录

## express是什么？

基于 `Node.js` 平台，快速、开放、极简的 `web` 开发框架。

## 创建一个服务器

回顾一下原生`http`的创建服务器的方式：

```js
var http = require('http')
var server = http.createServer(function (req, res) {
	console.log('Hello Server')
})
server.listen(9000)
```

再来看看`express`如果如何快速创建一个服务器：

```js
var http = require('http')
var express = require('express')
var app = express()

http.createServer(app)

app.get('/', function (req, res) {
	console.log('Hello Server')
})

app.listen(9000)
```

综上可见，`app`实际上就是一个匿名函数。

## 路由

