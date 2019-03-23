const { Service } = require('egg');
const mongoose = require('mongoose');

class PostService extends Service {
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    // .sort(): 按id排序
    const res = await ctx.model.Post.find({}, {
      title: 1, author: 1, createTime: 1, updateTime: 1,
    }).sort({ _id: -1 });
    return res;
  }

  async create(params) {
    const { ctx } = this;
    const res = await ctx.model.Post.create(params);
    return res;
  }

  async update(id, params) {
    const { ctx } = this;
    const res = await ctx.model.Post.update({ _id: id }, params);
    return res;
  }

  async query(postId) {
    const { ctx } = this;
    const id = mongoose.Types.ObjectId(postId);
    const res = await ctx.model.Post.find({ _id: id });
    return res;
  }
}

module.exports = PostService;
