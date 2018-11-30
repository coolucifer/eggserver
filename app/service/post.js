const Service = require('egg').Service;

class PostService extends Service{
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    return ctx.model.Post.find({}, { title: 1, createDate: 1 });
  }
  async create() {
    const { ctx } = this;
    const { body: params } = ctx.request;
    let response = await ctx.model.Post.create(params)
      .then(res => {
        return { success: true, resultCode: '100' };
      })
      .catch(err => {
        return { success: false, err: err };
      });
    return response;
  }
};

module.exports = PostService;