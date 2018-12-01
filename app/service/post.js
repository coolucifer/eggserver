const Service = require('egg').Service;
const mongoose = require('mongoose');

class PostService extends Service{
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    // .sort(): 按id排序
    return ctx.model.Post.find({}, { title: 1, author: 1, createTime: 1, updateTime: 1 }).sort({ '_id': -1 })
      .then(res => {
        const list = res.map(item => {
          // 解决无法编辑返回数据的问题
          item = item.toObject();
          item.id = item._id;
          delete item._id;
          return item;
        });
        return { success: true, resultCode: '100', list };
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
        return { success: true, resultCode: '100', id: res._id };
      })
      .catch(err => {
        return { success: false, err: err };
      });
    return response;
  }
  async query() {
    const { ctx } = this;
    const { id: params } = ctx.request.query;
    const _id = mongoose.Types.ObjectId(params);
    let response = await ctx.model.Post.find({ _id })
      .then(res => {
        // 根据Id获取的文章是唯一的, 取查询到的数组的第0位
        let post = res[0];
        post = post.toObject();
        post.id = post._id;
        delete post._id;
        return { success: true, resultCode: '100', post };
      })
      .catch(err => {
        return { success: false, err: err };
      });
      return response;
  }
};

module.exports = PostService;