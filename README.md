> 提示：请在webstorm中运行或开端口运行

# 一、AJAX 概述

AJAX(Asynchronous Javascript And XML)

- Asynchronous：浏览器支持异步通信模式，实现页面局部刷新。
- JavaScript：使用的编程语言
- And
- XML：通信数据的承载方式，但实际很少使用XML格式

> 相关技术：JavaScript、XML（JSON）、DOM操作

# 二、AJAX 相关概念

## 1、同步异步

- 同步：主线程执行，客户端发起请求->服务器响应->页面加载，阻塞线程。
- 异步：后台执行，客户端发起请求->服务器响应->页面加载同时执行。

  学习AJAX需三方面的知识：

- 运用HTML和CSS来实现页面，表达信息；
- 运用XMLHttpRequest和web服务器进行数据的异步交换；
- 运用JavaScript操作DOM，实现动态局部刷新；

## 2、XMLHttpRequest对象

  XMLHttpReques是实现交互的关键，创建XMLHttpRequest对象的方式如下：

```javascript
var request = new XMLHttpRequest();
```

  兼容IE6, IE5

```javascript
var request;
if(window.XMLHttpRequest) {
    // IE7+, Firefox, Chrome, Opera, Safari...
  	request = new XMLHttpRequest();
}else {
  	// IE5, IE5
  	request = new ActiveXObject('Microsoft.XMLHTTP');
}
```

## 3、HTTP请求

  http是计算机通过网络进行通信的规则，http是一种无状态协议。

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

> HTTP状态码由3位数字构成，其中首位数字定义了状态码的类型
>
> 1、1XX：信息类，表示收到Web浏览器请求，正在进一步的处理中；
>
> 2、2XX：成功，表示用户请求被正确接收、理解和处理。例如 200 OK；
>
> 3、3XX：重定向，表示请求没有成功，客户必须采取进一步的动作；
>
> 4、4XX：客服端错误，表示客户端提交的请求有错误。例如 404 Not Found：请求中引用的文档不存在；
>
> 5、5XX：服务器错误，表示服务器不能完成对请求的处理。例如 500

## 4、XMLHttpRequest 请求

  语法形式：

```javascript
// 1、配置请求
open(method, url, async)
// 2、发送请求
send(string)
```

  语法解读：

- method：请求方法
- url：请求资源地址
- async：同步（false）/异步（true默认）请求
- string：请求参数

```javascript
request.open('GET', 'get.php', true);
request.send(null)

request.open('POST', 'post.php', true);
request.send(null)

request.open('POST', 'login.php', true);
request.setReqestHeader('Content-type', 'application/x-www-form-urlencode');
request.send('username=Admin&password=123');
```

## 5、XMLHttpRequest 响应

- responseText：获得字符串形式的响应数据

- responseXML：获得 XML 形式的响应数据

- status/statusText：以数字和文本形式返回HTTP状态码

- getAllResponseHeader()：获取所有的响应报头

- getResponseHeader()：查询响应中的某个字段的值

- readyState

  > 0：请求未初始化，open还没有调用
  >
  > 1：服务器连接已建立，open已经调用了
  >
  > 2：请求已接收，也就是接收到头信息了
  >
  > 3：请求处理中，也就是接收到响应zhu主体了
  >
  > 4：请求已完成，且响应已就绪，也就是响应完成了

```javascript
var request = new XMLHttpRequest();
request.open('GET', 'get.php', true);
request.send(null);
request.onreadystatechange = function() {
  	if(request.readyState == 4 && request.status == 200) {
      	// 做一些事情 request.responseText...
  	}
}
```

# 三、JSON 格式

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

# 四、jQuery 中的AJAX

  语法：`jQuery.ajax([settings])`

  设置项常用属性：

- type：类型，“POST” 或 “GET”
- url：发送请求的地址
- data：是一个对象，连同请求发送到服务器的数据
- dataType：预期服务器返回的数据类型。如果不指定，jQuery将自动根据HTTP包含MIME信息来智能判断，一般我们采用JSON格式，可以设置为json。
- success：是一个方法，请求成功后的回调函数。传入返回后的数据，以及包含成功代码的字符串。
- error：是一个方法，请求失败时调用此函数，传入XMLHttpRequest对象。

```javascript
$.ajax({
  	type: "GET",
  	url: "xxx.php",
  	data: {},
  	dataType: "json",
  	success: function(data) {
      	
  	},
	error: function(error) {
      
	}
})
```

# 六、拓展：跨域

待更新......

