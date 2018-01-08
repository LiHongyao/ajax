# # AJAX 概述

## 1、简述

AJAX(Asynchronous Javascript And XML)

- Asynchronous：浏览器支持异步通信模式，实现页面局部刷新。
- JavaScript：使用的编程语言
- And
- XML：通信数据的承载方式，但实际很少使用XML格式

> 相关技术：JavaScript、XML（JSON）、DOM操作

## 2、优势

- 页面无刷新，用户体验好。
- 异步通信，更加快的响应能力。
- 减少冗余请求，减轻了服务器负担
- 基于标准化的并被广泛支持的技术，不需要下载插件或者小程序

## 3、缺点

- `ajax` 干掉了 `back` 按钮，即对浏览器后退机制的破坏。
- 存在一定的安全问题。
- 对搜索引擎的支持比较弱。
- 破坏了程序的异常机制。
- 无法用`URL`直接访问

## 4、应用场景

- 场景 1. 数据验证
- 场景 2. 按需取数据
- 场景 3. 自动更新页面

# # AJAX

## 1、同步异步

- 同步：主线程执行，客户端发起请求->服务器响应->页面加载，阻塞线程。
- 异步：后台执行，客户端发起请求->服务器响应->页面加载同时执行。


- 学习AJAX需三方面的知识：


- 运用HTML和CSS来实现页面，表达信息；
- 运用XMLHttpRequest和web服务器进行数据的异步交换；
- 运用JavaScript操作DOM，实现动态局部刷新；

## 2、XMLHttpRequest 对象

XMLHttpReques是实现交互的关键。它是 `Ajax` 实现的关键，发送异步请求、接受响应以及执行回调都是通过它来完成，所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。

**对象属性 **

- readystate：请求状态
- responseText：表示响应体的字符串
- responseXML：表示响应体的XML
- status：表示返回的HTTP状态码
- statusText：HTTP响应的状态文本
- onreadystatechange：当处理过程发生变化的时候执行下面的函数

**对象方法**

- open：打开要发送给服务器的请求
- send：发送HTTP请求给服务器

创建XMLHttpRequest对象的方式如下：

```javascript
var xhr = new XMLHttpRequest();
```

## 3、HTTP请求

http 是计算机通过网络进行通信的规则，http是一种无状态协议。

**一个完整的http请求，通常有下面7个步骤：**

- 1）、建立TCP连接
- 2）、Web浏览器向Web服务器发送请求命令
- 3）、Web浏览器发送请求头信息
- 4）、Web服务器应答
- 5）、Web服务器发送应答头信息
- 6）、Web服务器向浏览器发送数据
- 7）、Web服务器关闭TCP连接

**一个HTTP请求一般由四部分组成：**

- 1）、HTTP请求的方法或动作，比如是GET还是POST请求
- 2）、URL 请求地址
- 3）、请求头，包含一些客户端环境信息，身份验证信息等
- 4）、请求体，也就是请求正文，请求正文中可以包含客户提交的查询字符串信息，表单信息等等。

> **GET**：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符。

> **POST**：一般用于修改服务器上的资源，对所发送信息的数量无限制。

**一个HTTP响应一般由三部分组成：**

- 1）、一个数字和文字组成的状态码，用来显示请求是成功还是失败；
- 2）、响应头，响应头也和请求头一样包含许多有用的信息，例如吴福气类型、日期时间、内容类型和长度等。
- 3）、响应体，也就是响应正文

HTTP状态码由3位数字构成，其中首位数字定义了状态码的类型

> 1、1XX：信息类，表示收到Web浏览器请求，正在进一步的处理中；
>
> 2、2XX：成功，表示用户请求被正确接收、理解和处理。例如 200 OK；
>
> 3、3XX：重定向，表示请求没有成功，客户必须采取进一步的动作；
>
> 4、4XX：客服端错误，表示客户端提交的请求有错误。例如 404 Not Found：请求中引用的文档不存在；
>
> 5、5XX：服务器错误，表示服务器不能完成对请求的处理。例如 500

## 4、创建 XMLHttpRequest 请求

老版本的 `Internet Explorer`（IE5 和 IE6）使用`ActiveX` 对象：

```javascript
var xhr = new ActiveXObject("Microsoft.XMLHTTP");
```

为了应对所有的现代浏览器，包括 `IE5` 和 `IE6`，请检查浏览器是否支持 `XMLHttpRequest`对象。如果支持，则创建`XMLHttpRequest`对象。如果不支持，则创建`ActiveXObject`：

兼容各个浏览器的创建`Ajax`的工具函数：

```javascript
function createRequest() {
    var xhr = null;
    try  {
        xhr = new XMLHttpRequest();
    }catch(err) {
        try {
            xhr = new ActiveXObject("Msxm12.XMLHTTP");
        }catch(err) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(err) {
                xhr = null;
            }
        }
    }
    return xhr;
}
```

## 5、准备请求

语法形式：

```javascript
xhr.open(method,url,async);
```

1）、第一个参数表示请求类型的字符串，其值可以是`GET`或者`POST`。

- GET 请求：

  ```javascript
  xhr.open("GET", demo.php?name=Henrry Lee&age=8, true);
  ```

- POST 请求：

  ```javascript
  xhr.open("POST", demo.php, true);
  ```

2）、第二个参数是要作为请求发送目标的URL。

3）、第三个参数是 `true` 或 `false`，表示同步或异步请求（建议异步）

- `false`：同步模式发出的请求会暂停所有javascript代码的执行，知道服务器获得响应为止，如果浏览器在连接网络时或者在下载文件时出了故障，页面就会一直挂起。
- `true`：异步模式发出的请求，请求对象收发数据的同时，浏览器可以继续加载页面，执行其他javascript代码

## 6、发送请求

```javascript
xhr.send();
```

一般情况下，使用`Ajax`提交的参数多是些简单的字符串，可以直接使用`GET`方法将要提交的参数写到`open`方法的`url`参数中，此时`send`方法的参数为`null`或为空。

- GET 请求

  ```javascript
  xhr.open("GET", demo.php?name=Henrry Lee&age=8, true);
  xhr.send(null);
  ```

- POST 请求

  如果需要像 `HTML` 表单那样 `POST` 数据，请使用 `setRequestHeader()`来添加 `HTTP` 头。然后在`send()`方法中规定您希望发送的数据：

  ```javascript
  xhr.open("POST",demo.php,true);
  xhr.setRequestHeder("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
  xhr.send(null);
  ```

## 7、处理响应

```javascript
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        console.log(xhr.responseText);
    }
}
```

- `onreadystatechange`：处理过程发生变化的时候执行下面的函数
- `responseText`：获得字符串形式的响应数据
- `responseXML`：获得 XML 形式的响应数据
- `status/statusText`：以数字和文本形式返回HTTP状态码
- `getAllResponseHeader()`：获取所有的响应报头
- `getResponseHeader()`：查询响应中的某个字段的值
- `readyState`
  - 0：请求未初始化（还没有调用 `open()`）。
  - 1：请求已经建立，但是还没有发送（还没有调用 `send()`）。
  - 2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。
  - 3：请求在处理中；通常响应中已有部分数据可用了，但是服务器还没有完成响应的生成。
  - 4：响应已完成；您可以获取并使用服务器的响应了
- 返回值一般为`json`字符串，可以用`JSON.parse(xhr.responseText)`转化为`JSON`对象

## 8、完整示例

```javascript
function ajax(url, success, fail){
    // 1\. 创建连接
    var xhr = new XMLHttpRequest()
    // 2\. 配置请求
    xhr.open('get', url, true)
    // 3\. 发送请求
    xhr.send(null);
    // 4\. 接受请求
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else { // fail
                fail && fail(xhr.status);
            }
        }
    }
}
```

# # XML 格式

XML 指可扩展标记语言

XML 被设计用来传输和存储数据

其语法形式与HTML类似，如下所示：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<root>
    <name>木子李</name>
    <age>28</age>
    <profession>Web前端工程师/iOS工程师</profession>
    <address>四川省成都市高新区广都龙湖九里晴川</address>
</root>

```

# # JSON 格式

## 1、概念

- JSON：JavaScript 对象表示法（JavaScript Object Notation）
- JSON 是存储和交换文本嘻嘻的语法，类似XML。它采用键值对的方式来组织，易于人们阅读和编写，同时也易于机器解析和生成。
- JSON是独立于语言的，也就是说不管什么语言，都可以解析JSON，只需要按照JSON的规则来就行。

## 2、JSON 与 XML 比较

- json的长度和xml格式比起来很短小
- json读写的速度更快
- json可以使用JavaScript內建的方法直接进行解析，转换成JavaScript对象非常方便

## 3、JSON 语法规则

- JSON 数据的书写格式是：键值对（key-value），如：`"name":"Admin"`，键必须用引号括起来。

- JSON 的值可以是以下数据类型：

  a、数字（整数或浮点数）

  b、字符串（在引号中）

  c、布尔值（true 或 false）

  d、数组（在方括号中）

  e、对象（在花括号中）

  f、null

```javascript
{
  	"status": 200,
    "infos": {
      	"username": "Admin",
        "city": "成都"
    },
  	"des": "....."
}
```

## 4、JSON 转换/解析

- 转换：`JSON.stringify(obj)`
- 解析：`JSON.parse(jsonObj)`

## 5、JSON 格式化/校验工具

https://jsonlint.com/

# # jQuery 中的AJAX

## 1、$.get()

## 2、$.getJSON()

## 3、$.getScript()

## 4、$.post()

## 5、$.ajax()

> [$.ajax() 参数详解](https://github.com/LiHongyao/Blogs/issues/8)

# # 跨域

## 1、概述

> 同源策略

是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript 的浏览器都会使用这个策略。实际上，这种策略只是一个规范，并不是强制要求，各大厂商的浏览器只是针对同源策略的一种实现。它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。

> 跨域与跨域请求

**跨域** 简单的来说，指的是两个资源**非同源**。出于安全方面的考虑，页面中的JavaScript在**请求非同源的资源**时就会出 **跨域问题** ——即**跨域请求**，这时，由于同源策略，我们的请求会被浏览器禁止。也就出现了 我们常说的 **跨域** 问题。

下面，我们看一下，具体哪些情况会出现跨域问题(具体策略限制)：

![](IMGS/cross-origin.jpeg)

## 2、jsonp 

首先我们要思考一个问题，我们需要发起一个跨域的ajax请求，其中最本质的需求是我们需要与另外一个与另外一个域进行交互，来完成数据的传递。那既然是不允许跨域的ajax请求，那我们可以变一个方法，用其他的可以实现跨域的途径能够完成数据的传递，这样就可以完成我们本质的需求。

jsonp 跨域本质并不是ajax，只是执行了跨域js，html中，所有带`src`属性的标签都可以跨域，如 \<script>、\<img>、\<iframe>，所以，可以通过 \<script> 加载其他域的一段动态脚本，这段脚本包含了想要的数据信息。

json 跨域简单实现只需要在 $.ajax() 中 配置 dataType 为 jsonp即可。

## 3、cors 

当我们从一个域向另外一个域发起请求的时候，如果我们希望浏览器允许我们把这个请求进行接收和处理，那另一个域的响应数据里就一定要包含一个允许的标志（`Access-Control-Allow-Origin`），这个标志就是响应的一个头，同时这个标志的值就是我们发起请求域的名称。







