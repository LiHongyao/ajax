参考：<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>

# 一、概述

XMLHttpRequest 用来在浏览器和服务器端传输数据。

# 二、属性

- `timeout`：请求超时时间
- `status`：响应状态
- `response`：响应体
- `responseType`：响应类型

- `readyState`：请求状态码

  | #    | 名称             | 描述                                                         |
  | :--- | :--------------- | :----------------------------------------------------------- |
  | `0`  | Uninitialized    | 请求未初始化，XMLHttpRequest 对象已创建或已被 `abort()` 方法重置。 |
  | `1`  | OPEND            | `open()` 方法已调用                                          |
  | `2`  | HEADERS_RECEIVED | `send()` 方法已调用，成功接收到HTTP响应头。                  |
  | `3`  | LOADING          | 一旦HTTP响应内容开始加载                                     |
  | `4`  | DONE             | 一旦HTTP响应内容结束加载                                     |

  > 提示：当监听器被定义之后，每次状态改变时都会触发。为了检测状态1和状态2，监听器必须在 `open`  方法调用前调用。`open`方法必须在`send`方法调用前调用。

# 三、方法

- [`setRequestHeader()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/setRequestHeader)：设置请求头

- [`open()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/open)：初始化请求
- [`send()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send)：发送请求
- [`abort()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/abort)：终止请求

# 四、事件

- [`onreadystatechange()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/onreadystatechange)：请求状态改变
- [`timeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/timeout_event)：请求超时
- [`onprogress()`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestEventTarget/onprogress)：接收数据开始周期触发

# 五、示例

## 1、GET

```js
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
// -> xhr.open(method, url, sync)
xhr.open('GET', 'http://192.168.0.22:8888/info', true);
// -> 设置响应类型
xhr.responseType = 'json';
// -> 设置请求超时时间
xhr.timeout = 10000;
// 3. 发送请求
xhr.send();
// 4. 事件监听
// -> 请求完成
xhr.onload = function () {
  // readyState 请求状态
  // status 状态码
  if (xhr.readyState == 4 && xhr.status == 200) {
    // 打印结果
    console.log(xhr.response);
  } else {
    console.log(`XMLHttpRequest_ERROR_STATUS：${xhr.status}`);
  }
};
```

## 2、POST

```js
// 1. 创建请求对象
let xhr = new XMLHttpRequest();
// 2. 配置请求
// -> xhr.open(method, url, sync)
xhr.open('POST', 'http://192.168.0.22:8888/login', true);
// -> 设置请求头
xhr.setRequestHeader('Content-Type', 'application/json');
// -> 设置响应类型
xhr.responseType = 'json';
// 3. 发送请求
xhr.send(
  JSON.stringify({
    username: 'admin',
    password: '123',
  })
);
// 4. 监听请求
xhr.onload = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.response);
  } else {
    console.log('err');
  }
};

```

