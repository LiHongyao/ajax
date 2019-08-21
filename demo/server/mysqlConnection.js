const mysql = require("mysql");
const defaultOptions = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'db_test'
}
function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
module.exports = getConnection;