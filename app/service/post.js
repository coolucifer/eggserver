const Service = require('egg').Service;
const mongoose = require('mongoose');

class PostService extends Service{
  async list() {
    const { ctx } = this;
    // inclusion模式 指定返回的键，不返回其他键
    // .sort(): 按id排序
    return ctx.model.Post.find({}, { title: 1, author: 1, createTime: 1, updateTime: 1 }).sort({ '_id': -1 });
  }
  async create() {
    const { ctx } = this;
    const { body: params } = ctx.request;
    return await ctx.model.Post.create(params);
  }
  async query() {
    const { ctx } = this;
    const { id: params } = ctx.request.query;
    const _id = mongoose.Types.ObjectId(params);
    return await ctx.model.Post.find({ _id });
  }
};

module.exports = PostService;