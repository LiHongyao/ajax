/**
 * 1. 原生：XMLHttpRequest
 */
function xhr_get() {
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
            // 异步加载
            loadingHeros(xhr.response);
        }else {
            console.log(`XMLHttpRequest_ERROR_STATUS：${xhr.status}`);
        }
    }
}
function xhr_post() {
    // 1. 创建请求对象
    let xhr = new XMLHttpRequest();
    // 2. 配置请求
    // -> xhr.open(method, url, sync)
    xhr.open("POST", "http://127.0.0.1:8081/login", true);
    // -> 设置请求头
    xhr.setRequestHeader("Content-Type", "application/json");
    // -> 设置响应类型
    xhr.responseType = "json";
    // 3. 发送请求
    xhr.send(JSON.stringify({
        username: "lihy",
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
}

/**
 * 2. 原生：fetch (ES6)
 */
function fetch_get() {
    fetch("http://127.0.0.1:8081/heros")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        loadingHeros(data);
    });
}
function fetch_post() {
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
}

/**
 * 3. 三方库：jquery
 */
function jq_get() {
    $.ajax({
        url: "http://127.0.0.1:8081/heros",
        dataType: "json"
    }).done(res => {
        loadingHeros(res);
    }).fail(err => {
        console.log(err);
    });
}
function jq_post() {
    $.ajax({
        url: "http://127.0.0.1:8081/login",
        type: "POST",
        dataType: "json",
        data: {
            username: "lihy",
            password: "123"
        }
    }).done(res => {
        console.log(res);
    }).fail(err => {
        console.log(err);
    });
}


/**
 * 4. 三方库：axios
 */
function axios_get() {
    axios({
        method: "get",
        url: "/heros"
    }).then(res => {
        console.log(res.data);
        loadingHeros(res.data);
    }).catch(err => {
        console.log(err);
    });
}
function axios_post() {
    axios({
        url: "/login",
        method: "post",
        responseType: "json",
        data: {
            username: "lihy",
            password: "123"
        }
    }).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    });
}

function loadingHeros(data) {
    let parent = document.querySelector("tbody");
    let htmlStr = "";
    data.forEach(hero => {
        htmlStr += `<tr>
            <td>${hero.name}</td>
            <td>${hero.skill}</td>
            <td>${hero.gender}</td>
            <td>${hero.position}</td>
            <td>${hero.location}</td>
            <td>${hero.last_use_date}</td>
            <td>${hero.proficiency}</td>
        </tr>`
    });
    /*
    let keys    = ["name", "skill", "gender", "position", "location", "last_use_date", "proficiency"];
    data.forEach(function(hero) {
        htmlStr += `<tr>${(function() {
            let tdStr = "";
            keys.forEach(function(key) {
                tdStr += `<td>${hero[key]}</td>`
            });
            return tdStr;
        })()}</tr>`
    });*/
    parent.innerHTML = htmlStr;
}