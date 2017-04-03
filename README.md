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

这两种方式，当我们在浏览器回车敲下`http://localhost:9000`的时候，我们都能在控制台看到打印出`Hello Server`

综上可见，`app`实际上就是一个匿名函数。只不过，`app`更为强大，比如接下来要说的路由。

## 路由

之前我们都是直接访问根域名，`express`为我们提供了路由，可以为我们更快捷开发复杂的`web`应用提供了便利：

```js
app.get('/api', function (req, res) {
	res.send('Hello Server');
	res.end();
})

app.listen(9000)
```

接下来，我们就可以访问`http://localhost:9000/api`了。

## 中间件

这是一张我对中间件理解的图：

<img style="width: 70%" src="img/1.png" alt="">

我们可以把中间件理解为一个对用户请求进行过滤和预处理的东西，它一般不会直接对客户端进行响应，而是将处理之后的结果传递下去。其实它就是相当于一个过滤器，类似于`javeEE`中的`filter`。

`express`的中间件具有以下特征：

1. 可拔插
2. 谁先加载谁先执行
3. 大多数情况下，每个中间件相对来说都是独立的

对于第三点，我们可以举一个例子：	`cookie` 和 `cookieSession` 这两个中间件的顺序必须是`cookie`在前。




