var http = require('http')
var express = require('express')
var app = express()

// express 唯一内置的中间件 - 用于处理静态资源
app.use('/', express.static(__dirname + '/public'))

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
