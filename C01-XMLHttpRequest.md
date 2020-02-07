参考：<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>

| 状态 | 名称          | 描述                                                         |
| :--- | :------------ | :----------------------------------------------------------- |
| 0    | Uninitialized | 初始化状态。XMLHttpRequest 对象已创建或已被 abort() 方法重置。 |
| 1    | Open          | open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。 |
| 2    | Sent          | Send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。 |
| 3    | Receiving     | 所有响应头部都已经接收到。响应体开始接收但未完成。           |
| 4    | Loaded        | HTTP 响应已经完全接收。                                      |

## 1、GET

```js
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
// -> xhr.open(method, url, sync)
xhr.open("GET", "http://127.0.0.1:8081/heros", true);
// -> 设置响应类型
xhr.responseType = "json";
// -> 设置请求超时时间
xhr.timeout = 10000;
// 3. 发送请求
xhr.send();
// 4. 事件监听
// -> 请求完成
xhr.onload = function() {
    // readyState 请求状态
    // status 状态码
    if(xhr.readyState == 4 && xhr.status == 200) {
        // 打印结果
        console.log(xhr.response);
    }else {
        console.log(`XMLHttpRequest_ERROR_STATUS：${xhr.status}`);
    }
}
```

## 2、POST

```js
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
xhr.open("POST", "http://127.0.0.1:8081/user/login", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.responseType = "json";
// 3. 发送请求
xhr.send(JSON.stringify({
    username: "admin",
    password: "123"
}));
// 4. 监听请求
xhr.onload = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
    }else {
        console.log("err");
    }
}
```

