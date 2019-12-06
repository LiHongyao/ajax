参考：<http://www.axios-js.com/>

# 1. 下载

- 包管理工具下载：`npm i -S axios`

- 通过CDN引入：

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

# 2. GET

```js
axios({
    method: "GET",
    url: "http://127.0.0.1:8081/heros"
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
});
```

# 3. POST

```js
axios({
    url: "http://127.0.0.1:8081/login",
    method: "POST",
    responseType: "json",
    data: {
        username: "lihy",
        password: "123"
    }
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})
```






