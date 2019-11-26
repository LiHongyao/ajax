const http = require("http");
const url = require("url");
http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return;
    let {pathname, query} = url.parse(req.url, true);
    switch(pathname) {
        case "/info": {
            // 定义返回数据
            let _params = {name: "木子李", tel: "17398888669", job: "前端工程师"};
            console.log(query);
            // 获取回调函数名
            let _funcName = query.callback;
            // 设置响应头
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            // 调用回调函数并将参数从后台传递给前台
            res.end(`${_funcName}(${JSON.stringify(_params)})`);
        }break;
    }
}).listen(80, "0.0.0.0"); 
// 提示用户服务器相关信息
console.log("server running at http://127.0.0.1");
