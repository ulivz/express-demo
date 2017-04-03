var http = require('http')
var express = require('express')
var app = express()

// express 唯一内置的中间件 - 用于处理静态资源
app.use('/', express.static(__dirname + '/public'))

/**
 * next下一个中间件的引用。
 *
 * 用户登录
 * 对请求参数做加工处理
 */
app.use('/', function (req, res, next) {
	console.log('进入自定义中间件')
	next()
})

app.all('/index', function (req, res) {
	console.log('Hello Server')
	res.send('Hello Browser')
	res.end()
})

http.createServer(app).listen(9001, function (err) {
	if (err) {
		console.log('Fail to start server')
	} else {
		console.log('Successfully starting the server!')
	}
})
