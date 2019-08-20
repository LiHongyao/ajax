<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>

## 1、GET

```js
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
xhr.open("GET", "http://127.0.0.1:8081", true);
// 3. 发送请求
xhr.send(null);
// 4. 监听请求
xhr.onload = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
    }else {
        console.log("err");
    }
}
```

## 2. POST

```js
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
xhr.open("POST", "http://127.0.0.1:8081", true);
// 3. 发送请求
xhr.send(null);
// 4. 监听请求
xhr.onload = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);
    }else {
        console.log("err");
    }
}
```

