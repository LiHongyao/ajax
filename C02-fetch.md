参考：<https://github.github.io/fetch/>

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



