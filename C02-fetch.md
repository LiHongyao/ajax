# 一、概述

MDN 介绍：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

Fetch API 提供了一个获取资源的接口（包括跨域请求）。

**Fetch** fetch号称是AJAX的替代品，是在ES6出现的，使用了ES6中的 `promise` 对象。Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多。**fetch不是ajax的进一步封装，而是原生js，没有使用XMLHttpRequest对象**。

# 二、示例

## 1、GET

```js

fetch('http://192.168.0.22:8888/info')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## 2、POST

```js
fetch('http://192.168.0.22:8888/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'admin',
    password: '123456',
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

# 三、特点

- 语法简洁，更加语义化；
- 基于标准 `Promise` 实现，支持 `async`/`await`；
- 更加底层，提供的API丰富（`request`, `response`）
- 脱离了XHR，是ES规范里新的实现方式

# 四、不足

- fetch只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject；

- fetch默认不会带cookie，需要添加配置项： `fetch(url, {credentials: 'include'})`；

- fetch 无法监控读取进度和中断请求；

