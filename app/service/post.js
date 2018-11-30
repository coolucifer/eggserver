const Service = require('egg').Service;

class PostService extends Service{
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    // .sort(): 按id排序
    return ctx.model.Post.find({}, { title: 1, author: 1, createTime: 1, updateTime: 1 }).sort({ '_id': -1 })
      .then(res => {
        return Object.assign({ success: true, resultCode: '100' }, res);
      })
      .catch(err => {
        return { success: false, err: err }
      });
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