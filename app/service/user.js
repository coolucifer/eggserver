const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.User.find({"userName":"Emma"})
    // ctx.model.User.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
}
module.exports = UserService;