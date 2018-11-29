const Controller = require('egg').Controller;

class UserController extends Controller {
// 这里的 list 就是上面 controller.user.list 里面的 list
  async list() {
    const ctx = this.ctx;
    var aa = await ctx.service.user.list()
    // 此处我们将操作数据库，所以调用的是 service 文件夹里面的user.js 文件里面的 list方法
    // 调用玩这个方法后，会返回一个数据，我们用 aa 来接收
    ctx.body = aa
    // 将接收到返回的数据渲染出来
  }
}
module.exports = UserController;