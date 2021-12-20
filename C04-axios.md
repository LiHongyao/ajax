参考：<http://www.axios-js.com/>

# 1. 下载

- 包管理工具下载：`npm i -S axios`

- CDN引入：https://www.bootcdn.cn/axios/

# 2. GET

```js
axios({
    method: "GET",
    url: "http://192.168.0.22:8888/info"
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
});
```

# 3. POST

```js
axios({
    url: "http://192.168.0.22:8888/login",
    method: "POST",
    responseType: "json",
    data: {
        username: "admin",
        password: "123"
    }
}).then(res => {
    console.log(res.data);
}).catch(err => {
    console.log(err);
})
```

# 4. 全局配置

```javascript
// 全局设置默认请求地址
axios.defaults.baseURL = "";
```





