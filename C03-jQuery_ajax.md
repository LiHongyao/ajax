参考：

1. <https://api.jquery.com/category/ajax/>
2. <http://jquery.cuishifeng.cn/jQuery.Ajax.html>

# 1. 下载安装

- 直接下载：<https://jquery.com/download/>
- 包管理工具下载：`npm i -S jquery`
- CDN引入：<https://www.bootcdn.cn/jquery/>

# 2. GET

```js
$.ajax({
    url: "http://192.168.0.22:8888/info",
    dataType: "json"
}).done(res => {
    console.log(res);
}).fail(err => {
    console.log(err);
});
```

# 3. POST

```js
$.ajax({
    url: "http://192.168.0.22:8888/login",
    type: "POST",
    dataType: "json",
    data: {
        username: "admin",
        password: "123"
    }
}).done(res => {
    console.log(res);
}).fail(err => {
    console.log(err);
});
```

