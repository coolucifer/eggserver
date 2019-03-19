const Service = require('egg').Service;
const mongoose = require('mongoose');

class PostService extends Service{
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    // .sort(): 按id排序
    return await ctx.model.Post.find({}, { title: 1, author: 1, createTime: 1, updateTime: 1 }).sort({ '_id': -1 });
  }
  async create(params) {
    const { ctx } = this;
    return await ctx.model.Post.create(params);
  }
  async update(id, params) {
    const { ctx } = this;
    return await ctx.model.Post.update({ '_id': id }, params);
  }
  async query(postId) {
    const { ctx } = this;
    const _id = mongoose.Types.ObjectId(postId);
    return await ctx.model.Post.find({ _id });
  }
};

module.exports = PostService;