// 导入http模块

var http = require('http')
var express = require('express')
var app = express()

// var server = http.createServer(function (req, res) {
// 	console.log('Hello Server')
// })
//
// server.listen(9000)

// 将app对象注册在原生的http模块中
http.createServer(app)

app.get('/api', function (req, res) {
	res.send('Hello Server');
	res.end();
})

app.listen(9000)
