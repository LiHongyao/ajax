/*
 * @Author: Lee
 * @Date: 2021-12-20 16:27:49
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-20 17:07:37
 */
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async info() {
    this.ctx.body = {
      code: 0,
      data: {
        name: '张三',
        age: 28,
        major: '软件技术',
        phone: '17398888669',
        address: '成都市高新区雅和南四路26号',
      },
      msg: 'success!',
    };
  }
  async login() {
    const { username, password } = this.ctx.request.body;
    if (username === 'admin' && password === '123456') {
      this.ctx.body = {
        code: 0,
        data: {
          name: '张三',
          age: 28,
          major: '软件技术',
          phone: '17398888669',
          address: '成都市高新区雅和南四路26号',
        },
        msg: '登录成功',
      };
    } else {
      this.ctx.body = {
        code: -10,
        data: null,
        msg: '登录失败',
      };
    }
  }
}
module.exports = HomeController;
