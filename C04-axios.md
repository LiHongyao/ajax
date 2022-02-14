- [Axios 中文文档 >>](http://www.axios-js.com/)
- [Axios 中文说明 >>](https://www.kancloud.cn/yunye/axios/234845)

# 一、概述

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

特性：

- 浏览器端发起XMLHttpRequests请求
- `node`端发起http请求
- 支持Promise API
- 监听请求和返回
- 对请求和返回进行转化
- 取消请求
- 自动转换json数据
- 客户端支持抵御XSRF攻击

# 二、安装

1）npm

```shell
$ npm install axios
```

2）[CDN >>](https://www.bootcdn.cn/axios/)

# 三、示例

## 1. GET

```js
// → 直接将请求参数拼接在资源地址后面
axios({
    method: "GET",
    url: "http://192.168.0.22:8888/info?id=1"
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
});

// → 通过params配置请求参数
axios({
    method: "GET",
    url: "http://192.168.0.22:8888/info",
    params: { id: 1 }
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
});
```

## 2. POST

```js
axios({
    url: "http://192.168.0.22:8888/login",
    method: "POST",
    responseType: "json",
    data: {
        username: "admin",
        password: "123"
    }
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})
```

## 3. 并发请求

```javascript
function getOrders() {
  return axios.get('/orders');
}
function getArticles() {
  return axios.get('/articles');
}

axios.all([getOrders(), getArticles()])
  .then(axios.spread(function (orders, articles) {
    // 两个请求现在都执行完成
}));
```

# 四、参数传输格式

参数传输格式主要有两种：

- form-data：?pages=1&size=8

- x-www-form-urlencode：{pages:1, size=8}

如果要将  x-www-form-urlencode 转换为 form-data 格式操作如下：

1）→ 首先你需要引入 **qs** 库，qs库无需安装，直接引入即可：

```js
import Qs from 'qs';
```

3）→ 在使用 `axios.post` 请求时使用 `Qs.stringify()`  方法包裹传递参数即可进行转换：

```js
const URI = "http://192.168.0.22:8888/login"
this.$axios.post(URI, Qs.stringify({
	username: "admin",
	password: "123"
})).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err.message)
});
```

# 五、全局配置

你可以指定将被用在各个请求的配置默认值

```js
Axios.defaults.baseURL = 'https://api.example.com';
Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

全局配置的好处在于在请求当前域名下的资源时，我们无需在加域名，只需要写资源相对路径即可。

# 六、拦截器

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```javascript
// => 1. 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// => 2. 添加响应拦截器
Axios.interceptors.response.use(res => {
  // 在发送请求之前做些什么
  console.log(res)
  return res;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});
```

为什么需要拦截器呢？拦截器可以做什么事情？

我们可以通过拦截器判断参数是否合理？请求有没有问题？请求的数据是否有问题？

比如，我们之前对数据进行请求时，需要对请求参数做转换，我们可以把转换的逻辑扔在拦截器中进行处理，如下所示：

```js
import Qs from 'qs';
Axios.interceptors.request.use(function (config) {
  if(config.method == 'post') {
    config.data = Qs.stringify(config.data);
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
```

这样一来，我们就相当于全局配置了请求设置，而无需在每一次请求时设置了。