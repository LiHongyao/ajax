/**
 * 1. 原生：XMLHttpRequest
 */
function xhr_get() {
  // 1. 创建请求对象
  let xhr = new XMLHttpRequest();
  // 2. 配置请求
  // -> xhr.open(method, url, sync)
  xhr.open('GET', 'http://192.168.0.22:8888/info', true);
  // -> 设置响应类型
  xhr.responseType = 'json';
  // -> 设置请求超时时间
  xhr.timeout = 10000;
  // -> 设置请求头
  xhr.setRequestHeader('Content-Type', 'json');
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
}
function xhr_post() {
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
}

/**
 * 2. 原生：fetch (ES6)
 */
function fetch_get() {
  fetch('http://192.168.0.22:8888/info')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
function fetch_post() {
  fetch('http://192.168.0.22:8888/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'admin',
      password: '123456',
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

/**
 * 3. 三方库：jquery
 */
function jq_get() {
  $.ajax({
    url: 'http://192.168.0.22:8888/info',
    dataType: 'json',
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}
function jq_post() {
  $.ajax({
    url: 'http://192.168.0.22:8888/login',
    type: 'POST',
    dataType: 'json',
    data: {
      username: 'admin',
      password: '123',
    },
  })
    .done((res) => {
      console.log(res);
    })
    .fail((err) => {
      console.log(err);
    });
}

/**
 * 4. 三方库：axios
 */
function axios_get() {
  axios({
    method: 'get',
    url: 'http://192.168.0.22:8888/info',
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
function axios_post() {
  axios({
    url: 'http://192.168.0.22:8888/login',
    method: 'post',
    responseType: 'json',
    data: {
      username: 'admin',
      password: '123456',
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
