// 1. 导入express
const express = require("express");
// 2. 创建express实例
const app = express();
// 3. 处理跨域
app.all("*", (req, res, next) => {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  // 让options尝试请求快速结束
    else
        next();
});
// 4. 监听 http://127.0.0.1:8081"
app.listen(8081, "127.0.0.1");

// 5. 中间件
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// 6. 处理路由
const getConnection = require("./mysqlConnection");
app.get("/heros", (req, res) => {
    let {name} = req.query;
    let sql    = "";
    if(name) { // 查询指定英雄信息
        sql = `SELECT * FROM heros WHERE name = '${name}'`
    }else {    // 查询所有英雄信息
        sql = `SELECT * FROM heros`;
    }
    // 链接数据库
    const db = getConnection();
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if(err) {
            res.send({
                status: "fail",
                errMsg: err.message
            });
        }else {
            res.send(JSON.stringify(sqlRes));
        }
    });
    db.end();
});
app.post("/login", (req, res) => {
    let {username, password} = req.body.params || req.body;
    let sql = `SELECT * FROM user WHERE username = '${username}'`;
    // 链接数据库
    const db = getConnection();
    db.connect();
    db.query(sql, (err, sqlRes) => {
        if(err) {
            res.send({
                status: "fail",
                errMsg: err.message
            });
        }else {
            let user = sqlRes[0];
            if(!user) {
                res.send({
                    status: "fail",
                    errMsg: "用户名不存在!"
                });
            }else if(username === user.username && password == user.password) {
                // 登陆成功
                delete user.password;
                res.send({
                    status: "200 ok",
                    res: user
                })
            }else {
                res.send({
                    status: "fail",
                    errMsg: "账号或密码错误!"
                });
            }
        }
    });
    db.end();
});
// 7. 打印输出提示信息
console.log("server running at http://127.0.0.1:8081");