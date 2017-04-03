# 中间件

浏览器到后台业务逻辑的中间层
最终请求会到达真正的后端

- request
- response

- 可拔插
- 谁先加载谁先执行
- 每个中间件相对来说都是独立的（但也不是绝对的）
	- 例如这两个的顺序有严格要求:
	- cookie
	- cookieSession

最终，都是依赖于`TJ`的`Connect`： 中间件

- body parser
- static

express 3.0以前都依赖于`Connect`

