const Service = require('egg').Service;

class PostService extends Service{
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    return ctx.model.Post.find({}, { title: 1, createDate: 1 });
  }
};