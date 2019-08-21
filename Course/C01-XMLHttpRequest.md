参考：<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>

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

