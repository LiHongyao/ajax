# 1、GET

```js
fetch("http://127.0.0.1:8081/heros")
.then(response => response.json())
.then(data => {
    console.log(data);
});
```

# 2、POST

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

# 3. 特点

- 基于Promise实现的接口，避免了ajax的回调地狱
- 以数据流的形式返回数据，数据量大和传输大文件有优势
- Fetch API引入三个新的对象（也是构造函数）：Headers, Request和Response。headers用于设置请求头还是比较方便的。浏览器其实是不怎么需要构造请求和处理响应的，这个角度看request和response比较鸡肋。但随着Service Worker的部署，以后浏览器也可以向Service Worker发起请求
- cors的支持，fetch的response.type有三种不一样的状态。basic：正常的同域请求，cors：CORS机制下的跨域请求，opaque：非CORS机制下的跨域请求，这时无法读取返回的数据，也无法判断是否请求成功

# 4. 不足

- fetch的兼容性还不是很好，可能需要配置polyfill
- fetch没办法像XMLHttpRequest一样取消请求的发送

# 5. 参考链接

- https://www.jianshu.com/p/25ec43ebd0e3 BY Thomson_Yang
- https://github.github.io/fetch/ 

