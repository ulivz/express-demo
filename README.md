# express-demo
Express的学习记录

## express是什么？

基于 `Node.js` 平台，快速、开放、极简的 `web` 开发框架。

## 创建一个服务器

回顾一下原生的创建服务器的方式：
```js
var server = http.createServer(function (req, res) {
	console.log('Hello Server')
})
```
再来看看express如果如何快速创建一个服务器:
```js
http.createServer(app)

app.get('/api', function (req, res) {
	res.send('Hello Server');
	res.end();
})

app.listen(9000)
```