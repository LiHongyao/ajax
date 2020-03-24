# 一、概述

MDN 介绍：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

Fetch API 提供了一个获取资源的接口（包括跨域请求）.

# 二、示例

## 1、GET

```js
fetch("http://127.0.0.1:8081/heros")
.then(response => response.json())
.then(data => {
    console.log(data);
});
```

## 2、POST

```js
fetch("http://127.0.0.1:8081/login",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: "lihy",
        password: "123"
    })
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
```

# 三、特点

- 语法更加简洁、易读

- 基于Promise实现的接口

- 以数据流的形式返回数据，数据量大和传输大文件有优势

- Fetch API引入三个新的对象（也是构造函数）：Headers, Request和Response。headers用于设置请求头还是比较方便的。浏览器其实是不怎么需要构造请求和处理响应的，这个角度看request和response比较鸡肋。但随着Service Worker的部署，以后浏览器也可以向Service Worker发起请求

- cors的支持，fetch的 response.type 有三种不一样的状态:

  - basic：正常的同域请求
  - cors：CORS机制下的跨域请求，只支持三种content-Type
    - application/x-www-form-urlencoded
    - multipart/form-data
    - text/plain
- opaque：非CORS机制下的跨域请求
  
- Fetch 默认不会携带cookie，如果需要设置 credentials: 'include'

# 四、不足

- fetch 无法监控读取进度和中断请求。

- fetch 兼容性差，需要配置polyfill库。
